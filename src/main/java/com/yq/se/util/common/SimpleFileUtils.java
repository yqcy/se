package com.yq.se.util.common;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Enumeration;
import java.util.List;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

/**
 * Created by wb264139 on 2017/3/9.
 */
public class SimpleFileUtils {

    public static final String SEPARATOR = System.getProperty("file.separator");

    public static final String CLASS_SUFFIX = ".class";

    public static final String CLASS_SEPARATOR = ".";

    public static final String ENCODER = "UTF-8";

    /**
     * 获得当前路径下所有的文件
     *
     * @param directory 当前文件或文件夹
     * @param recursion true，递归获取当前包及子包下所有文件；false，只获取当前路径下
     * @param prefix    要获取的文件的前缀
     * @param suffix    要获取的文件的后缀
     * @return
     */
    public static List<Class> getClassByFile(File directory, boolean recursion, String prefix, String suffix, String packageName) {
        List<Class> list = new ArrayList<>();
        if (directory.isFile()) {//单个文件
            if (prefix == null || directory.getPath().startsWith(prefix)) {
                if (suffix == null || directory.getPath().endsWith(suffix)) {
                    String name = directory.getPath();
                    String className = transferToClassName(name, packageName);
                    list.add(ReflectUtils.getClass(className));
                }
            }
        } else if (directory.isDirectory()) {//文件夹
            Collection<File> files = FileUtils.listFiles(directory, new String[]{suffix}, recursion);
            if (files != null) {
                for (File file : files) {
                    list.addAll(getClassByFile(file, false, prefix, suffix, packageName));
                }
            }
        }
        return list;
    }

    public static List<Class> getAllClassesForCurrentProject(Class clz) {
        List<Class> list = new ArrayList<>();
        String packageName = clz.getPackage().getName();
        URL resource = clz.getResource("/" + StringUtils.replace(packageName, CLASS_SEPARATOR, "/"));
        String path = resource.getPath();
//        System.out.println("the file's path is :\t" + path + "=================================");
        if (path.indexOf("jar!") != -1) {//是个jar
            try {
                JarFile jarFile = new JarFile(path.substring(5, path.indexOf("jar!") + 3));//jar文件要去掉前5个字符'file:'，直到jar!为止，不包括!号
                Enumeration<JarEntry> entries = jarFile.entries();
                while (entries.hasMoreElements()) {//还有下个jar文件
                    JarEntry jarEntry = entries.nextElement();
                    String name = jarEntry.getName();
                    if (name.endsWith(CLASS_SUFFIX)) {
                        name = transferToClassName(name, packageName);
                        if (name.indexOf("DatabaseCheckedJob") != -1)
                            System.out.println("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//*/*/*" + name);
                        try {
                            Class aClass = ReflectUtils.getClass(name);
                            if (aClass != null) {
                                list.add(aClass);
                            }
                        } catch (RuntimeException e) {
                            System.out.println("is not a valid class file!");
                        }
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {//正常的项目文件
            File file = new File(path);
            list.addAll(SimpleFileUtils.getClassByFile(file, true, null, "class", packageName));
        }
        return list;
    }

    public static String transferToClassName(String name, String packageName) {
        name = StringUtils.replace(name, "/", CLASS_SEPARATOR);//把/分隔符转换成.
        name = StringUtils.replace(name, SEPARATOR, CLASS_SEPARATOR);//把windowns 上的\\或linue上的/转换为.
        name = StringUtils.removePrefix(name, packageName);//去掉包名之前的部分
        name = StringUtils.removeSuffix(name, SimpleFileUtils.CLASS_SUFFIX);//去掉.class
        name = StringUtils.substringAfter(name, packageName);
        return name;
    }
}

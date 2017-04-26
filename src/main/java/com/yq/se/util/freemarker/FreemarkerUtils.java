package com.yq.se.util.freemarker;

import com.yq.se.util.common.StringUtils;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateExceptionHandler;
import org.apache.commons.io.FileUtils;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wb264139 on 2017/4/25.
 */
public class FreemarkerUtils {

    public static void create(Object object) throws Exception {
        create("UTF-8", "src/main/resources/ftl", object, "src/main/resources/doc");
    }

    public static void create(String encoding, String ftlPath, Object object, String docPath) throws Exception {
        if (object == null) return;
        String classSimpleName = object.getClass().getSimpleName();
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_23);
        cfg.setDefaultEncoding((encoding == null) ? "UTF-8" : encoding);
        cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
        cfg.setLogTemplateExceptions(false);
        cfg.setDirectoryForTemplateLoading(new File(ftlPath));
        Template template = cfg.getTemplate(classSimpleName + ".ftl");
        //获得输出文件流
        FileOutputStream fos = new FileOutputStream(FileUtils.getFile(new File(docPath), classSimpleName + ".md"));//存放文件的路径
        BufferedOutputStream bos = new BufferedOutputStream(fos);//缓存流
        Writer out = new OutputStreamWriter(bos);
        Map<String, Object> root = new HashMap<>();
        root.put(StringUtils.toLowerCaseForFirstWord(classSimpleName), object);
        template.process(root, out);
        out.flush();
        out.close();
    }

}

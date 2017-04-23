package com.yq.se.util.common;

import java.lang.reflect.Field;
import java.util.*;

public class MyReflectUtils {

    /**
     * 通过属性名拿到相应的get方法名
     *
     * @return
     */
    public static String getMethodName(Field field) {
        String fieldName = field.getName();
        StringBuilder sb = new StringBuilder();
        sb.append("get").append(fieldName.substring(0, 1).toUpperCase())
                .append(fieldName.substring(1));
        return sb.toString();
    }

    /**
     * 根据属性名拿到相应的get方法名
     *
     * @param value
     * @return
     */
    public static String getMethodName(String value) {
        StringBuilder sb = new StringBuilder();
        sb.append("get").append(value.substring(0, 1).toUpperCase())
                .append(value.substring(1));
        return sb.toString();
    }

    /**
     * 根据属性名拿到相应的set方法名
     *
     * @param value
     * @return
     */
    public static String setMethodName(String value) {
        StringBuilder sb = new StringBuilder();
        sb.append("set").append(value.substring(0, 1).toUpperCase())
                .append(value.substring(1));
        return sb.toString();
    }

    public static String fieldValue(Object obj, String field) {
        Field f = null;
        String value=null;
        try {
            f = obj.getClass().getDeclaredField(field);
            f.setAccessible(true);
            value = f.get(obj).toString();
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return value;

    }

    public static String[] getFields(Class clz,String...excludeWords){
        Set<String> set = new HashSet<String>();
        List<String> list = new ArrayList<>();
        if (excludeWords != null) {
            set.addAll(Arrays.asList(excludeWords));
        }
        Field[] fields = clz.getDeclaredFields();
        for (Field f : fields) {
            f.setAccessible(true);
            String name = f.getName();
            if (!set.contains(name)) {
                list.add(name);
            }
        }
        return list.toArray(new String[0]);
    }
}

package com.yq.se.util.common;


import java.lang.annotation.Annotation;
import java.lang.reflect.Field;

/**
 * Created by wb264139 on 2017/2/27.
 */
public class ReflectUtils {


    public static boolean isNeedIterator(Class clz) {
        if (clz.equals(Byte.class)) return false;
        if (clz.equals(Short.class)) return false;
        if (clz.equals(Integer.class)) return false;
        if (clz.equals(Long.class)) return false;
        if (clz.equals(Character.class)) return false;
        if (clz.equals(Boolean.class)) return false;
        if (clz.equals(Float.class)) return false;
        if (clz.equals(Double.class)) return false;
        if (clz.equals(Annotation.class)) return false;
        if (clz.equals(Class.class)) return false;
        return true;
    }

    public static Class getClass(String classFullName) {
        Class<?> clz = null;
        try {
            clz = Class.forName(classFullName);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
        return clz;

    }

//    public static Object methodInvoke(Object obj, Scheduling scheduling) {
//        Class<?> clz = obj.getClass();
//        List<Param> params = scheduling.getMethod().getParams();
//        Class[] clzs = new Class[params.size()];
//        for (int i = 0; i < params.size(); i++) {
//            try {
//                clzs[i] = Class.forName(params.get(i).getType());
//            } catch (ClassNotFoundException e) {
//                e.printStackTrace();
//                throw new RuntimeException(e);
//            }
//        }
//        Object[] objs = new Object[params.size()];
//        for (int i = 0; i < params.size(); i++) {
//            String value = params.get(i).getValue();
//            objs[i] = initObject(clzs[i], value);
//        }
//        Object object = null;
//        try {
//            Method method = clz.getMethod(scheduling.getMethod().getName(), clzs);
//            object = method.invoke(obj, objs);
//        } catch (NoSuchMethodException e) {
//            e.printStackTrace();
//            throw new RuntimeException(e);
//        } catch (IllegalAccessException e) {
//            e.printStackTrace();
//            throw new RuntimeException(e);
//        } catch (InvocationTargetException e) {
//            e.printStackTrace();
//            throw new RuntimeException(e);
//        }
//        return object;
//    }


    public static Object initObject(Class clz, String value) {
        if (java.util.Date.class.equals(clz)) {
            return SimpleDateUtils.parse(value);
        } else if (Integer.class.equals(clz)) {
            return Integer.parseInt(value);
        } else {
            return null;
        }
    }

    public static Object getObjectByName(String className) {
        Class clz = getClass(className);
        if (clz == null) return null;
        Object o = null;
        try {
            o = clz.newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return o;
    }

    public static void initField(Field field, Object obj, Object val) {
        field.setAccessible(true);
        try {
            field.set(obj, val);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public static Object getObjectByClass(Class clz) {
        Object obj = null;
        try {
            obj = clz.newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return obj;
    }

    public static Object initValue(String className, Object value) {
        Class clz = getClass(className);
        return initValue(clz, value);
    }

    public static Object initValue(Class clz, Object value) {
        String simpleName = clz.getSimpleName();
        switch (simpleName) {
            case "String": {
                String v = (String) value;
                return v;
            }
            case "Integer": {
                return Integer.valueOf((String) value);
            }
            case "Date": {
                return SimpleDateUtils.parse((String) value);
            }
            default:
                return null;
        }
    }
}

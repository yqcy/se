package com.yq.se.util.common;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wb264139 on 2017/3/9.
 */
public class StringUtils {

    private static final String SEPARATOR = ",";

    /**
     * 去掉字符串的指定后缀
     */
    public static String removeSuffix(String str, String suffix) {
        if (suffix == null || str == null || str.indexOf(suffix) == -1) return str;
        int len = suffix.length();
        return str.substring(0, str.length() - len);
    }

    /**
     * 替换字符串中的所有指定字符
     */
    public static String replace(String str, String regex, String replacement) {
        int i = str.indexOf(regex);
        if (regex == null || str == null || i == -1) return str;
        while (i != -1) {
            str = str.replace(regex, replacement);
            i = str.indexOf(regex);
        }
        return str;
    }

    /**
     * 获取字符串指定子串之后的所有部分
     */
    public static String substring(String str, String target) {
        if (target == null || str == null || str.indexOf(target) == -1) return str;
        int i = str.indexOf(target);
        int len = target.length();
        return str.substring(i + len);
    }

    public static String substringBefore(String str, String target) {
        if (target == null || str == null)
            return str;
        int i = str.indexOf(target);
        return str.substring(0, i) + target;
    }

    public static String substringAfter(String str, String target) {
        if (target == null || str == null || str.indexOf(target) == -1) return str;
        return str.substring(str.indexOf(target));
    }

    /**
     * 去掉字符串的指定前缀
     */
    public static String removePrefix(String str, String prefix) {
        if (prefix == null || str == null || str.indexOf(prefix) == -1) return str;
        return str.substring(prefix.length());
    }

    /**
     * 获取从开始到指定字符串的新字符串
     */
    public static String toSubstring(String str, String target) {
        if (target == null || str == null || str.indexOf(target) == -1) return str;
        int index = str.indexOf(target);
        return str.substring(0, index);
    }

    /**
     * 判断字符串或对象是否为空值
     *
     * @param t
     * @return
     */
    public static <T> T isNull(T t) {
        if (t == null) return null;
        if ("".equals(t)) return null;
        return t;
    }

    /**
     * 把 'xxx,xxx,xxx'转换成[xxx,xxx,xxx]
     *
     * @param strs
     * @return
     */
    public static String[] transferToArray(String strs) {
        if (strs == null) return null;
        return strs.split(SEPARATOR);
    }

    /**
     * 获得http请求结果中对应key的value，不需要转换json
     * {"code":0,"msg":"请求成功","data":["arms","ecs","edas"],"detail":{"requestId":"6009067a-12cf-4020-81e9-9637f1e1f4e8"}}
     * 获得data对应的值
     *
     * @param key
     * @param str
     * @return
     */
    public static String getValueForHttpRequest(String str, String key) {
        if (str == null || key == null || str.length() == 0) return null;
        str = str.trim();
        if (str.startsWith("{") && str.endsWith("}")) {
            str = str.substring(1, str.length() - 2);
            getValueForHttpRequest(str, key);
        }
        String[] split = str.split(",");
        if (split.length > 0) {
            for (int i = 0; i < split.length - 1; i++) {
                String[] array = split[i].split(":");
                String k = array[0].trim();
                k = trimMark(k);
                String v = array[1].trim();
                v = trimMark(v);
                v = v.trim();
                if (key.equals(k)) {
                    if (v.startsWith("{")) v = v.substring(1);
                    if (v.endsWith("}")) v = v.substring(0, v.length() - 2);
                    return v;
                }
                if (v.startsWith("{") && v.endsWith("}")) return getValueForHttpRequest(v, key);
            }

        }
        return null;
    }

    private static String trimMark(String str) {
        if (str == null || str.length() == 0) return null;
        str = str.trim();
        str = str.replaceAll("\"", "");
        str = str.replaceAll("\'", "");
        return str;
    }

    /**
     * 首字母小写
     *
     * @param string
     * @return
     */
    public static String toLowerCaseForFirstWord(String string) {
        String firstWord = string.substring(0, 1);
        String lowerCase = firstWord.toLowerCase();
        return string.replaceFirst(firstWord, lowerCase);
    }

    /**
     * 把类似于craeteDate转变为数据库的字段名create_date
     */
    public static String changeToDBName(String string) {
        Map<Character, String> keyCache = new HashMap<>();
        for (int i = 'A'; i <= 'Z'; i++) {
            keyCache.put((char) i, "_" + (char) (i + 32));
        }
        if (string == null) return null;
        char[] chars = string.toCharArray();
        StringBuilder sb = new StringBuilder();
        for (char aChar : chars) {
            if (keyCache.containsKey(aChar)) {
                sb.append(keyCache.get(aChar));
            } else {
                sb.append(aChar);
            }
        }
        return sb.toString();
    }

    /**
     * 获得本机用户名
     *
     * @return
     */
    private String getHostname() {
        try {
            String hostName = InetAddress.getLocalHost().getHostName();
            return hostName;
        } catch (UnknownHostException e) {
            return "[unknown]";
        }
    }
}

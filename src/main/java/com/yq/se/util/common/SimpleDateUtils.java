package com.yq.se.util.common;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by wb264139 on 2017/2/23.
 */
public class SimpleDateUtils {

    private static final DateFormat sdfHour = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    private static final DateFormat sdfDay = new SimpleDateFormat("yyyy-MM-dd");
    public static final String CYCLE = "every";

    /**
     * 转换日期的格式
     *
     * @param date
     * @return 默认格式为20170223013000
     */
    public static String format(Date date) {
        return sdfHour.format(date);
    }

    /**
     * 转换指定的日期格式
     *
     * @param date
     * @param format
     * @return
     */
    public static String format(Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    /**
     * 获得该date之前或之后的hours个小时的日期
     *
     * @param date  指定日期
     * @param hours 小时，负为此时间之前，正为此时间之后
     * @return
     */
    public static Date getTime(Date date, int hours) {
        if (hours == 0) {
            return date;
        } else {
            Calendar c = Calendar.getInstance();
            c.setTime(date);
            c.add(Calendar.HOUR_OF_DAY, hours);
            return c.getTime();
        }

    }

    public static Date parse(String value) {
        if (value == null) return null;
        Date parse = null;
        try {
            if (CYCLE.equals(value)) parse = new Date();
            else parse = sdfHour.parse(value);
        } catch (ParseException e) {
            try {
                parse = sdfDay.parse(value);
            } catch (ParseException e1) {
                e1.printStackTrace();
            }
        }
        return parse;
    }

    public static java.sql.Date transferSqlDate(Date date) {
        if (date == null) return new java.sql.Date(new Date().getTime());
        return new java.sql.Date(date.getTime());
    }

    /**
     * 判读目标日期是否在两个日期之间
     *
     * @param target 目标日期
     * @param begin  开始日期
     * @param end    结束日期
     * @return
     */
    public static boolean scope(Date target, Date begin, Date end) {
        long targetTime = target.getTime();
        long beginTime = begin.getTime();
        long endTime = end.getTime();
        if (targetTime < beginTime || targetTime > endTime) return false;
        return true;
    }

    /**
     * 判断目标日期是否在今天的范围内
     *
     * @param target
     * @return true:今天已经执行过;false:今天没有执行过
     */
    public static boolean todayScope(Date target) {
        Calendar today = Calendar.getInstance();
        int year = today.get(Calendar.YEAR);
        int month = today.get(Calendar.MONTH);
        int day = today.get(Calendar.DATE);
        StringBuilder sb = new StringBuilder();
        sb.append(year).append("-").append(month + 1).append("-").append(day).append(" ").append("00:00:00");
        Date begin = parse(sb.toString());
        Date end = parse(sb.replace(sb.indexOf("00:00:00"), sb.length(), "23:59:59").toString());
        return scope(target, begin, end);
    }
}

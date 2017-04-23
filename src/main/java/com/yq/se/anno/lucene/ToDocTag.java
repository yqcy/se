package com.yq.se.anno.lucene;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Created by 晴 on 2017/1/7.
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface ToDocTag {

    /**
     * 在索引库中存储的key值
     *
     * @return
     */
    String value() default "";

    /**
     * string类型不分词,text类型会分词
     * 目前只支持这两种类型
     *
     * @return
     */
    String type() default "text";

    /**
     * 是否保存该属性的值到索引库中
     * true保存会在查询的时候展示
     * false不保存在查询的时候会为Null
     *
     * @return
     */
    boolean store() default true;

    /**
     * 查询结果是否需要高亮处理
     *
     * @return
     */
    boolean highlight() default true;

    /**
     * 是否为主键
     * 主键只能起到唯一标识作用
     * 主键将不会进行高亮显示
     *
     * @return
     */
    boolean isId() default false;

    /**
     * 设置权重值
     *
     * @return
     */
    float boost() default 1f;

}

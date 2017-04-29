package com.yq.se.util.lucene;

import org.apache.lucene.queryparser.classic.ParseException;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

/**
 * Created by 晴 on 2017/1/6.
 */
public interface LuceneIndexHelper<T> {

    public void add(T t);

    public void modify(T t);

    public void delete(String id);

    public List<T> queryByKeyword(String keyword, T t, int n) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, ParseException;

    public List<T> queryAll(T t, int i) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException;





}

package com.yq.se.util.lucene;

import java.util.List;

/**
 * Created by 晴 on 2017/1/6.
 */
public interface LuceneIndexHelper<T> {

    public void add(T t);

    public void modify(T t);

    public void delete(String id);

    public List<T> queryByKeyword(String keyword, T t, int n);

    public List<T> queryAll(T t, int i);





}

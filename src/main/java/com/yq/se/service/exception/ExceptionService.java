package com.yq.se.service.exception;

import com.yq.se.entity.db.Exception;
import com.yq.se.util.mybatis.Page;

import java.util.Date;
import java.util.List;

/**
 * Created by wb264139 on 2017/4/7.
 */
public interface ExceptionService {

    Exception add(Exception e, float boost);

    Exception delete(String id);

    Exception update(Exception e, float boost);

    List<Exception> modify(String json);

    Exception queryById(String id);

    List<Exception> queryAll(Exception e, Page page, Date beginTime, Date endTime, String sort, String order);

    List<Exception> search(String keyword, Page page);

    List<Integer> queryEveryMonthClickCount();

    List<String> queryAllExceptionName();

    List<Exception> queryAll(String userId, Page page, Date beginTime, Date endTime, String sort, String order);

}

package com.yq.se.service.exception;

import com.yq.se.entity.db.Exception;
import com.yq.se.util.mybatis.Page;

import java.util.Date;
import java.util.List;

/**
 * Created by wb264139 on 2017/4/7.
 */
public interface ExceptionService {

    Exception add(Exception e);

    Exception delete(String id);

    Exception update(Exception e);

    Exception queryById(String id);

    List<Exception> queryAll(Exception e, Page page, Date beginTime, Date endTime);

    List<Exception> search(String keyword, int count);

}

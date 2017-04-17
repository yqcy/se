package com.yq.se.service.exception;

import com.yq.se.entity.Exception;
import com.yq.se.util.Page;

import java.util.Date;
import java.util.List;

/**
 * Created by wb264139 on 2017/4/7.
 */
public interface ExceptionService {

    Exception add(Exception e);

    Exception delete(Integer id);

    Exception update(Exception e);

    Exception queryById(Integer id);

    List<Exception> queryAll(Exception e, Page page, Date beginTime, Date endTime);

}

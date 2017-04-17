package com.yq.se.service.exception;

import com.yq.se.mapper.ExceptionMapper;
import com.yq.se.entity.Exception;
import com.yq.se.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by wb264139 on 2017/4/7.
 */
@Service
public class ExceptionServiceImpl implements ExceptionService {
    @Autowired
    private ExceptionMapper mapper;

    @Override
    public Exception add(Exception e) {
        e.setStatus(0);
        e.setCreateDate(new Date());
        mapper.add(e);
        Exception exception = mapper.queryById(e.getId());
        return exception;
    }

    @Override
    public Exception delete(Integer id) {
        Exception exception = mapper.queryById(id);
        mapper.delete(id);
        return exception;
    }

    @Override
    public Exception update(Exception e) {
        Exception exception = mapper.queryById(e.getId());
        mapper.modify(e);
        return exception;
    }

    @Override
    public Exception queryById(Integer id) {
        Exception exception = mapper.queryById(id);
        return exception;
    }

    @Override
    public List<Exception> queryAll(Exception e, Page page, Date beginTime, Date endTime) {
        int count = mapper.count(e, beginTime, endTime);
        page.setCount(count);
        List<Exception> exceptions = mapper.queryAll(e, page, beginTime, endTime);
        return exceptions;
    }
}

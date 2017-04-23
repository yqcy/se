package com.yq.se.service.exception;

import com.yq.se.mapper.ExceptionMapper;
import com.yq.se.entity.Exception;
import com.yq.se.util.lucene.LuceneIndexHelper;
import com.yq.se.util.lucene.LuceneIndexHelperSupport;
import com.yq.se.util.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.UUID;

/**
 * Created by wb264139 on 2017/4/7.
 */
@Service
public class ExceptionServiceImpl implements ExceptionService {
    @Autowired
    private ExceptionMapper mapper;

    private final LuceneIndexHelper<Exception> luceneIndexHelper = new LuceneIndexHelperSupport<>();

    @Override
    public Exception add(Exception e) {
        e.setStatus(0);
        e.setId(UUID.randomUUID().toString());
        e.setCreateDate(new Date());
        mapper.add(e);
        Exception exception = mapper.queryById(e.getId());
        luceneIndexHelper.add(exception);
        return exception;
    }

    @Override
    public Exception delete(String id) {
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
    public Exception queryById(String id) {
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

    @Override
    public List<Exception> search(String keyword, int count) {
        List<Exception> exceptions = luceneIndexHelper.queryByKeyword(keyword, new Exception(), count);
        return exceptions;
    }
}

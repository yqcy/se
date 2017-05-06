package com.yq.se.service.exception;

import com.yq.se.entity.db.Exception;
import com.yq.se.mapper.ExceptionMapper;
import com.yq.se.util.common.StringUtils;
import com.yq.se.util.lucene.LuceneIndexHelper;
import com.yq.se.util.lucene.LuceneIndexHelperSupport;
import com.yq.se.util.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by wb264139 on 2017/4/7.
 */
@Service
public class ExceptionServiceImpl implements ExceptionService {
    @Autowired
    private ExceptionMapper mapper;

    private final LuceneIndexHelper<Exception> luceneIndexHelper = new LuceneIndexHelperSupport<>();

    @Override
    public Exception add(Exception e, float boost) {
        e.setStatus(0);
        e.setId(UUID.randomUUID().toString());
        e.setCreateDate(new Date());
        mapper.add(e);
        Exception exception = mapper.queryById(e.getId());
        luceneIndexHelper.add(exception, boost);
        return exception;
    }

    @Override
    public Exception delete(String id) {
        Exception exception = mapper.queryById(id);
        mapper.delete(id);
        return exception;
    }

    @Override
    public Exception update(Exception e, float boost) {
        Exception exception = mapper.queryById(e.getId());
        mapper.modify(e);
        luceneIndexHelper.modify(exception, boost);
        return exception;
    }

    @Override
    public Exception queryById(String id) {
        Exception exception = mapper.queryById(id);
        return exception;
    }

    @Override
    public List<Exception> queryAll(Exception e, Page page, Date beginTime, Date endTime, String sort, String order) {
        int count = mapper.count(e, beginTime, endTime);
        page.setCount(count);
        if (sort != null && !sort.equals("")) {
            if (order != null && !order.equals("")) {
                page.setOrder(StringUtils.changeToDBName(sort) + " " + order);
            }
        }
        List<Exception> exceptions = mapper.queryAll(e, page, beginTime, endTime);
        return exceptions;
    }

    @Override
    public List<Exception> search(String keyword, Page page) {
        return search(keyword, page, 100);
    }

    public List<Exception> search(String keyword, Page page, int queryCount) {
        if (page.getEnd() >= queryCount) search(keyword, page, queryCount * 10);
        List<Exception> list = luceneIndexHelper.queryByKeyword(keyword, new Exception(), queryCount);
        if (list == null || list.size() == 0) return null;
        page.setCount(list.size());
        List<Exception> result = new ArrayList<>(page.getSize());
        for (int i = page.getBegin(); i <= page.getEnd(); i++) {
            if (i < list.size()) result.add(list.get(i));
            else break;
        }
        return result;
    }

}

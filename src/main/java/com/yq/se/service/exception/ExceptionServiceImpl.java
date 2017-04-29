package com.yq.se.service.exception;

import com.yq.se.entity.db.Exception;
import com.yq.se.mapper.ExceptionMapper;
import com.yq.se.util.lucene.LuceneIndexHelper;
import com.yq.se.util.lucene.LuceneIndexHelperSupport;
import com.yq.se.util.mybatis.Page;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.*;

/**
 * Created by wb264139 on 2017/4/7.
 */
@Service
public class ExceptionServiceImpl implements ExceptionService {
    @Autowired
    private ExceptionMapper mapper;

    private final LuceneIndexHelper<Exception> luceneIndexHelper = new LuceneIndexHelperSupport<>();

    private final Map<String, Map<Integer, Exception>> searchCache = new HashMap<>();

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
    public List<Exception> search(String keyword, Page page) {
        return search(keyword, page, 100);
    }

    public List<Exception> search(String keyword, Page page, int queryCount) {
        List<Exception> exceptions = new ArrayList<>();
        Map<Integer, Exception> cache = searchCache.get(keyword);
        if (cache != null && page.getCount() != null && cache.size() >= page.getCount()) {
            for (int i = page.getBegin(); i < page.getSize(); i++) {
                exceptions.add(cache.get(i));
            }
            return exceptions;
        }
        if (cache == null) cache = new LinkedHashMap<>();
        try {
            List<Exception> list = luceneIndexHelper.queryByKeyword(keyword, new Exception(), queryCount);
            if (list == null) return null;
            page.setCount(list.size());
            for (int i = 0; i < list.size(); i++) {
                cache.put(i, list.get(i));
            }
            searchCache.put(keyword, cache);
            return search(keyword, page, queryCount + 100);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

}

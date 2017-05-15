package com.yq.se.service.exception;

import com.yq.se.entity.db.Exception;
import com.yq.se.entity.db.ExceptionClick;
import com.yq.se.entity.db.User;
import com.yq.se.entity.dto.MonthCount;
import com.yq.se.filter.LoginFilter;
import com.yq.se.mapper.ExceptionClickMapper;
import com.yq.se.mapper.ExceptionMapper;
import com.yq.se.service.solve.SolveService;
import com.yq.se.util.common.StringUtils;
import com.yq.se.util.lucene.LuceneIndexHelper;
import com.yq.se.util.lucene.LuceneIndexHelperSupport;
import com.yq.se.util.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by wb264139 on 2017/4/7.
 */
@Service
public class ExceptionServiceImpl implements ExceptionService {
    @Autowired
    private ExceptionMapper exceptionMapper;
    @Autowired
    private ExceptionClickMapper clickMapper;
    @Autowired
    private LoginFilter loginFilter;
    @Autowired
    private SolveService solveService;

    private final LuceneIndexHelper<Exception> luceneIndexHelper = new LuceneIndexHelperSupport<>();

    @Override
    public Exception add(Exception e, float boost) {
        e.setStatus(0);
        e.setId(UUID.randomUUID().toString());
        e.setCreateDate(new Date());
        exceptionMapper.insert(e);
        Exception exception = exceptionMapper.selectById(e.getId());
        luceneIndexHelper.add(exception, boost);
        return exception;
    }

    @Override
    public Exception delete(String id) {
        Exception exception = exceptionMapper.selectById(id);
        exceptionMapper.delete(id);
        return exception;
    }

    @Override
    public Exception update(Exception e, float boost) {
        Exception exception = exceptionMapper.selectById(e.getId());
        exceptionMapper.update(e);
        luceneIndexHelper.modify(exception, boost);
        return exception;
    }

    @Override
    public Exception queryById(String id) {
        Exception exception = exceptionMapper.selectById(id);
        if (exception == null) return null;
        ExceptionClick click = new ExceptionClick();
        click.setCreateDate(new Date());
        click.setExceptionId(id);
        User loginUser = loginFilter.loginUser;
        if (loginUser != null) click.setUserId(loginUser.getId());
        clickMapper.insert(click);

        return exception;
    }

    @Override
    public List<Exception> queryAll(Exception e, Page page, Date beginTime, Date endTime, String sort, String order) {
        int count = exceptionMapper.count(e, beginTime, endTime);
        page.setCount(count);
        if (sort != null && !sort.equals("")) {
            if (order != null && !order.equals("")) {
                page.setOrder(StringUtils.changeToDBName(sort) + " " + order);
            }
        }
        List<Exception> exceptions = exceptionMapper.selectAll(e, page, beginTime, endTime);
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
            if (i < list.size()) {
                Exception e = list.get(i);
                result.add(e);
                ExceptionClick click = new ExceptionClick();
                User loginUser = loginFilter.loginUser;
                click.setUserId(loginUser.getId());
                click.setExceptionId(e.getId());
                click.setCreateDate(new Date());
                clickMapper.insert(click);
            } else break;
        }
        return result;
    }

    @Override
    public List<Integer> queryEveryMonthClickCount() {

        List<MonthCount> monthCounts = clickMapper.selectClickCountForEveryMonth();
        List<Integer> result = new ArrayList<>(12);
        out:
        for (int i = 1; i <= 12; i++) {
            for (MonthCount monthCount : monthCounts) {
                if (monthCount.getMonth() == i) {
                    result.add(monthCount.getCount());
                    continue out;
                }
            }
            result.add(0);
        }
        return result;
    }
}

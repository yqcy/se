package com.yq.se.service.solve;

import com.yq.se.entity.db.Exception;
import com.yq.se.entity.db.Solve;
import com.yq.se.entity.db.User;
import com.yq.se.mapper.ExceptionMapper;
import com.yq.se.mapper.SolveMapper;
import com.yq.se.mapper.UserMapper;
import com.yq.se.util.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by 晴 on 2017/5/13.
 */
@Service
public class SolveServiceImpl implements SolveService {
    @Autowired
    private SolveMapper solveMapper;
    @Autowired
    private ExceptionMapper exceptionMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    public Solve insert(Solve solve) {
        solve.setCreateDate(new Date());
        solve.setStatus(0);
        solve.setScore(0);
        solve.setId(UUID.randomUUID().toString());
        solveMapper.insert(solve);
        return selectById(solve.getId());
    }

    @Override
    public Solve selectById(String id) {
        Solve solve = solveMapper.selectById(id);
        if (solve == null) return null;
        Exception exception = solve.getException();
        User user = solve.getUser();
        if (exception != null) {
            Exception queryException = exceptionMapper.queryById(exception.getId());
            solve.setException(queryException);
        }
        if (user != null) {
            User queryUser = userMapper.selectById(user.getId());
            solve.setUser(queryUser);
        }
        return solve;
    }

    @Override
    public List<Solve> select(String exceptionId, String userId, Page page) {
        if (page == null) page = new Page();
        int count = solveMapper.count(exceptionId, userId);
        page.setCount(count);
        List<Solve> solves = solveMapper.selectByExceptionAndUser(exceptionId, userId, page);
        if (solves == null) return null;
        for (Solve solve : solves) {
            String eId = solve.getException().getId();
            String uId = solve.getUser().getId();
            Exception exception = exceptionMapper.queryById(eId);
            User user = userMapper.selectById(uId);
            solve.setException(exception);
            solve.setUser(user);
        }
        return solves;
    }
}

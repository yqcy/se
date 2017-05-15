package com.yq.se.service.solve;

import com.yq.se.entity.db.Solve;
import com.yq.se.util.mybatis.Page;

import java.util.List;

/**
 * Created by 晴 on 2017/5/13.
 */
public interface SolveService {
    Solve insert(Solve solve);

    Solve selectById(String id);

    List<Solve> select(String exceptionId, String userId, Page page);

    Solve addScore(String id);
}

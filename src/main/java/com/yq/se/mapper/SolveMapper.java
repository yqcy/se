package com.yq.se.mapper;

import com.yq.se.entity.db.Solve;
import com.yq.se.util.mybatis.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by 晴 on 2017/3/4.
 */
@Mapper
public interface SolveMapper {
    void insert(@Param("solve") Solve solve);

    Solve selectById(@Param("id") String id);

    List<Solve> selectByExceptionAndUser(@Param("exceptionId") String exceptionId, @Param("userId") String userId, @Param("page") Page page);

    int count(@Param("exceptionId") String exceptionId, @Param("userId") String userId);


}

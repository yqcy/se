package com.yq.se.mapper;

import com.yq.se.entity.db.Solve;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by 晴 on 2017/3/4.
 */
@Mapper
public interface SolveMapper {
    void add(@Param("solve") Solve s);
    void delete(@Param("solve") Solve s);
    void modifyById(@Param("solve") Solve s);
    Solve queryById(@Param("id") Integer id);
    List<Solve> queryAll(@Param("position") Integer position , @Param("columns") Integer columns , @Param("sort") String sort);
}

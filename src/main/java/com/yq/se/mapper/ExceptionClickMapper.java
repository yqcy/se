package com.yq.se.mapper;

import com.yq.se.entity.db.ExceptionClick;
import com.yq.se.entity.dto.MonthCount;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by 晴 on 2017/5/7.
 */
@Mapper
public interface ExceptionClickMapper {
    void insert(@Param("click") ExceptionClick click);

    List<ExceptionClick> selectClickTop(@Param("num") Integer num);

    List<MonthCount> selectClickCountForEveryMonth();
}

package com.yq.se.mapper;

import com.yq.se.model.Exception;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by 晴 on 2017/3/4.
 */
@Mapper
public interface ExceptionMapper {

    void add(@Param("exception") Exception e);
    void delete(@Param("exception") Exception e);
    void modifyById(@Param("exception") Exception e);
    Exception queryById(@Param("id") Integer id);
    List<Exception> queryAll(@Param("position") Integer position , @Param("columns") Integer columns , @Param("sort") String sort);

}

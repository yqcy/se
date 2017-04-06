package com.yq.se.mapper;

import com.yq.se.model.Exception;
import com.yq.se.util.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by 晴 on 2017/3/4.
 */
@Mapper
public interface ExceptionMapper {

    int add(@Param("exception") Exception e);

    int delete(@Param("id") Integer id);

    int modify(@Param("exception") Exception e);

    Exception queryById(@Param("id") Integer id);

    List<Exception> queryAll(@Param("page")Page page , @Param("status") Integer status);

}
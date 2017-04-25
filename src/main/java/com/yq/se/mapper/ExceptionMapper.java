package com.yq.se.mapper;

import com.yq.se.entity.db.Exception;
import com.yq.se.util.mybatis.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

/**
 * Created by 晴 on 2017/3/4.
 */
@Mapper
public interface ExceptionMapper {

    int add(@Param("exception") Exception e);

    int delete(@Param("id") String id);

    int modify(@Param("exception") Exception e);

    Exception queryById(@Param("id") String id);

    List<Exception> queryAll(@Param("exception") Exception e, @Param("page") Page page, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime);

    int count(@Param("exception") Exception e, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime);

}

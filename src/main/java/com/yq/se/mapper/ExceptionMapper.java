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

    int insert(@Param("exception") Exception e);

    int delete(@Param("id") String id);

    int update(@Param("exception") Exception e);

    Exception selectById(@Param("id") String id);

    List<Exception> selectAll(@Param("exception") Exception e, @Param("page") Page page, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime);

    int count(@Param("exception") Exception e, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime);
}

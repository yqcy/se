package com.yq.se.mapper;

import com.yq.se.entity.db.User;
import com.yq.se.entity.dto.MonthCount;
import com.yq.se.util.mybatis.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

/**
 * Created by 晴 on 2017/3/5.
 */
@Mapper
public interface UserMapper {

    int add(@Param("user") User user);

    int modify(@Param("user") User user);

    int delete(@Param("id") String id);

    User selectById(@Param("id") String id);

    User selectByUsername(@Param("username") String username);

    List<User> selectAll(@Param("page") Page page, @Param("status") Integer status, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime);

    int count(@Param("status") Integer status, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime);

    List<MonthCount> selectRegisterCountForEveryMonth();
}

package com.yq.se.mapper;

import com.yq.se.entity.User;
import com.yq.se.util.Page;
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

    int delete(@Param("id") Integer id);

    User queryById(@Param("id") Integer id);

    User queryByUsername(@Param("username") String username);

    List<User> queryAll(@Param("page") Page page, @Param("status") Integer status, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime, @Param("order") String order);

    int count(@Param("status") Integer status, @Param("beginTime") Date beginTime, @Param("endTime") Date endTime);
}

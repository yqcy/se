package com.yq.se.mapper;

import com.yq.se.model.User;
import com.yq.se.util.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

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

    List<User> queryAll(@Param("page") Page page, @Param("status") Integer status);

    int count(@Param("status") Integer status);
}
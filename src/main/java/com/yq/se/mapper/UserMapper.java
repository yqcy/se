package com.yq.se.mapper;

import com.yq.se.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by 晴 on 2017/3/5.
 */
@Mapper
public interface UserMapper {
    /**
     * 添加新用户
     * @param user
     * @return
     */
    int add(@Param("user") User user);

    /**
     * 修改帐户信息
     * @param user
     * @return
     */
    User modify(@Param("user") User user);

    /**
     * 删除用户
     * @param user
     * @return
     */
    User delete(@Param("user") User user);

    /**
     * 按id查询用户
     * @param id
     * @return
     */
    User queryById(@Param("id") Integer id);

    /**
     * 查询所有的用户
     * @param position 查询数据的下标
     * @param columns 查询的数据量
     * @param sort
     * @param status
     * @return
     */
    List<User> queryAll(@Param("position") Integer position, @Param("columns") Integer columns, @Param("sort") String sort, @Param("status") Integer status);
}

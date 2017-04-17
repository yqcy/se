package com.yq.se.service.user;

import com.yq.se.entity.User;

import java.util.Date;
import java.util.List;

/**
 * Created by 晴 on 2017/3/19.
 */
public interface UserService {

    /**
     * 添加新注册用户
     *
     * @param user
     * @return
     */
    User addNewUser(User user);

    /**
     * 根据ID主键删除用户
     *
     * @param id
     * @return
     */
    int deleteById(Integer id);

    /**
     * 修改用户个人信息
     *
     * @param user
     * @return
     */
    User modify(User user);

    /**
     * 分页查询用户
     * @param status
     * @param pageNum
     * @param pageSize
     * @param beginTime
     * @param endTime
     * @return
     */
    List<User> queryAllUsers(Integer status, Integer pageNum, Integer pageSize, Date beginTime, Date endTime);

    /**
     * 查询指定ID的用户
     *
     * @param id
     * @return
     */
    User queryById(Integer id);

}

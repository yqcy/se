package com.yq.se.service.user;

import com.yq.se.mapper.UserMapper;
import com.yq.se.entity.User;
import com.yq.se.util.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * Created by 晴 on 2017/3/19.
 */
@Service
@EnableTransactionManagement
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public User addNewUser(User user) {
        user.setCreateDate(new Date());
        user.setStatus(0);
        userMapper.add(user);
        return user;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public int deleteById(Integer id) {
        return userMapper.delete(id);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public User modify(User user) {
        userMapper.modify(user);
        return userMapper.queryById(user.getId());
    }

    @Override
    @Transactional(propagation = Propagation.NEVER, readOnly = true)
    public List<User> queryAllUsers(Integer status, Integer pageNum, Integer pageSize, Date beginTime, Date endTime, String order) {
        int count = userMapper.count(status, beginTime, endTime);
        Page page = new Page(pageNum, pageSize, count);
        return userMapper.queryAll(page, status, beginTime, endTime, order);
    }

    @Override
    @Transactional(propagation = Propagation.NEVER, readOnly = true)
    public User queryById(Integer id) {
        return userMapper.queryById(id);
    }

    @Override
    public boolean checkUsername(String username) {
        if (username == null) return false;
        User user = userMapper.queryByUsername(username);
        if (user!=null)return false;
        return true;
    }
}

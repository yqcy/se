package com.yq.se.service.user;

import com.yq.se.mapper.UserMapper;
import com.yq.se.model.User;
import com.yq.se.util.Page;
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
    public List<User> queryAllUsers(Integer pageNum, Integer pageSize) {
        int count = userMapper.count(null);
        Page page = new Page(pageNum, pageSize, count);
        return userMapper.queryAll(page, null);
    }

    @Override
    @Transactional(propagation = Propagation.NEVER, readOnly = true)
    public User queryById(Integer id) {
        return userMapper.queryById(id);
    }
}

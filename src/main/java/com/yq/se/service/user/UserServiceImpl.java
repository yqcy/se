package com.yq.se.service.user;

import com.yq.se.entity.db.UserLogin;
import com.yq.se.entity.dto.MonthCount;
import com.yq.se.filter.LoginFilter;
import com.yq.se.mapper.UserLoginMapper;
import com.yq.se.mapper.UserMapper;
import com.yq.se.entity.db.User;
import com.yq.se.util.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by 晴 on 2017/3/19.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserLoginMapper userLoginMapper;

    @Override
    public User addNewUser(User user) {
        user.setId(UUID.randomUUID().toString());
        user.setCreateDate(new Date());
        user.setStatus(0);
        userMapper.add(user);
        return user;
    }

    @Override
    public int deleteById(String id) {
        return userMapper.delete(id);
    }

    @Override
    public User modify(User user) {
        userMapper.modify(user);
        return userMapper.selectById(user.getId());
    }

    @Override
    public List<User> queryAllUsers(Integer status, Date beginTime, Date endTime, Page page, String sort, String order) {
        int count = userMapper.count(status, beginTime, endTime);
        if (sort != null && order != null) page.setOrder(sort + " " + order);
        page.setCount(count);
        return userMapper.selectAll(page, status, beginTime, endTime);
    }

    @Override
    public User queryById(String id) {
        return userMapper.selectById(id);
    }

    @Override
    public boolean checkUsername(String username) {
        if (username == null) return false;
        User user = userMapper.selectByUsername(username);
        if (user != null) return false;
        return true;
    }

    @Override
    public List<Integer> queryRegisterCountForEveryMonth() {
        List<MonthCount> monthCounts = userMapper.selectRegisterCountForEveryMonth();
        List<Integer> result = new ArrayList<>(12);
        out:
        for (int i = 1; i <= 12; i++) {
            for (MonthCount monthCount : monthCounts) {
                if (monthCount.getMonth() == i) {
                    result.add(monthCount.getCount());
                    continue out;
                }
            }
            result.add(0);
        }
        return result;
    }

    @Override
    public User login(String username, String password) {
        User user = LoginFilter.loginUser;//TODO 这里需要换成从数据库中查询
        if (user == null) return null;
        UserLogin userLogin = new UserLogin();
        userLogin.setLoginTime(new Date());
        userLogin.setUserId(user.getId());
        userLoginMapper.insert(userLogin);
        return user;
    }

    @Override
    public List<Integer> queryLoginCountForEveryMonth() {
        List<MonthCount> monthCounts = userLoginMapper.selectLoginCountForEveryMonth();
        List<Integer> result = new ArrayList<>(12);
        out:
        for (int i = 1; i <= 12; i++) {
            for (MonthCount monthCount : monthCounts) {
                if (monthCount.getMonth() == i) {
                    result.add(monthCount.getCount());
                    continue out;
                }
            }
            result.add(0);
        }
        return result;
    }
}

package com.yq.se.service.user;

import com.yq.se.entity.dto.MonthCount;
import com.yq.se.mapper.UserMapper;
import com.yq.se.entity.db.User;
import com.yq.se.util.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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
        return userMapper.selectById(user.getId());
    }

    @Override
    @Transactional(propagation = Propagation.NEVER, readOnly = true)
    public List<User> queryAllUsers(Integer status, Date beginTime, Date endTime, Page page, String sort, String order) {
        int count = userMapper.count(status, beginTime, endTime);
        if (sort != null && order != null) page.setOrder(sort + " " + order);
        page.setCount(count);
        return userMapper.selectAll(page, status, beginTime, endTime);
    }

    @Override
    @Transactional(propagation = Propagation.NEVER, readOnly = true)
    public User queryById(Integer id) {
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
    public List<Integer> queryCreateCountForEveryMonth() {
        List<MonthCount> monthCounts = userMapper.selectCountForEveryMonth();
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

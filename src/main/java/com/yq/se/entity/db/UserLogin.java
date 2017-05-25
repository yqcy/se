package com.yq.se.entity.db;

import java.util.Date;

/**
 * Created by 晴 on 2017/5/10.
 */
public class UserLogin {
    private Integer id;
    private String userId;
    private Date loginTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Date getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(Date loginTime) {
        this.loginTime = loginTime;
    }
}

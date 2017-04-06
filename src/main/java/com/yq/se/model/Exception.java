package com.yq.se.model;

import java.util.Date;
import java.util.List;

/**
 * Created by 晴 on 2017/3/4.
 */
public class Exception {
    private Integer id;
    private String classFullName;//异常全限定名
    private String description;//描述信息
    private List<Solve> solves;//解决方案
    private Date createDate;//创建日期
    private Date lastUpdate;
    private Integer status;
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getClassFullName() {
        return classFullName;
    }

    public void setClassFullName(String classFullName) {
        this.classFullName = classFullName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Solve> getSolves() {
        return solves;
    }

    public void setSolves(List<Solve> solves) {
        this.solves = solves;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
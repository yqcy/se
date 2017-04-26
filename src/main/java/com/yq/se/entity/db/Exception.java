package com.yq.se.entity.db;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.yq.se.anno.lucene.ToDocTag;
import com.yq.se.util.common.SimpleDateUtils;

import java.util.Date;
import java.util.List;

/**
 * Created by 晴 on 2017/3/4.
 */
public class Exception {
    @ToDocTag(type = "string")
    private String id;
    @ToDocTag()
    private String fullClassName;//异常全限定名
    @ToDocTag
    private String description;//描述信息
    private List<Solve> solves;//解决方案
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createDate;//创建日期
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date lastUpdate;
    private Integer status;
    @ToDocTag
    private User user;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getFullClassName() {
        return fullClassName;
    }

    public void setFullClassName(String fullClassName) {
        this.fullClassName = fullClassName;
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

    public void setUser(String str) {
        if (str != null) {
            String[] ss1 = str.split("&");
            if (ss1 != null) {
                String[] ss2 = ss1[0].split("=");//nickname=明天丶天晴
                String[] ss3 = ss1[1].split("=");//registerDate=2017-04-23
                String nicknameValue = ss2[1];
                String createDateValue = ss3[1];
                this.user = new User();
                this.user.setNickname(nicknameValue);
                this.user.setCreateDate(SimpleDateUtils.parse(createDateValue));
            }
        }
    }
}

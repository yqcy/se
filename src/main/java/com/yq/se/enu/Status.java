package com.yq.se.enu;

/**
 * Created by 晴 on 2017/3/4.
 */
public enum Status {
    CHECK(0),
    PASS(1),
    DELETE(-1);
    private Integer status;

    Status(Integer status) {
        this.status = status;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Status{" +
                "status=" + status +
                '}';
    }
}

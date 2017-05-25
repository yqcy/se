package com.yq.se.entity.ftl;

import java.util.List;

/**
 * Created by wb264139 on 2017/4/25.
 */
public class Interface {
    private String function;
    private String path;
    private String result;
    private List<Paramter> paramters;
    private Boolean used = true;
    private String requestType;

    public String getFunction() {
        return function;
    }

    public void setFunction(String function) {
        this.function = function;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public List<Paramter> getParamters() {
        return paramters;
    }

    public void setParamters(List<Paramter> paramters) {
        this.paramters = paramters;
    }

    public Boolean getUsed() {
        return used;
    }

    public void setUsed(Boolean used) {
        this.used = used;
    }

    public String getRequestType() {
        return requestType;
    }

    public void setRequestType(String requestType) {
        this.requestType = requestType;
    }
}

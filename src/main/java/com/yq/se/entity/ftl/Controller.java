package com.yq.se.entity.ftl;

import java.util.List;

/**
 * Created by wb264139 on 2017/4/25.
 */
public class Controller {

    private String name;

    private List<Interface> interfaces;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Interface> getInterfaces() {
        return interfaces;
    }

    public void setInterfaces(List<Interface> interfaces) {
        this.interfaces = interfaces;
    }
}

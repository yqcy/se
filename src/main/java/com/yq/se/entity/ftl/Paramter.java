package com.yq.se.entity.ftl;

/**
 * Created by wb264139 on 2017/4/25.
 */
public class Paramter {
    private String name;
    private String type;

    public Paramter(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

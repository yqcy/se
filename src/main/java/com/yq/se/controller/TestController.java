package com.yq.se.controller;

import com.yq.se.mapper.ExceptionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 晴 on 2017/2/26.
 */
@RestController
public class TestController {

    @Autowired
    private ExceptionMapper exceptionMapper;

    @RequestMapping("/search")
    public String search() {
        return "测试rest";
    }

    @RequestMapping("/mapper")
    public Object mapper() {
        return exceptionMapper;
    }
}

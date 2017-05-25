package com.yq.se.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 晴 on 2017/4/26.
 */
@Controller
@RequestMapping("/test")
public class TestController {

    @RequestMapping("/jsp")
    public String turnJSP() {
        return "index";
    }
}

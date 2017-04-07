package com.yq.se.controller;

import com.yq.se.model.User;
import com.yq.se.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 晴 on 2017/3/26.
 */
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/register")
    public Object register() {
        return new User();
    }

}

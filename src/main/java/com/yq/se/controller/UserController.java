package com.yq.se.controller;

import com.yq.se.model.User;
import com.yq.se.service.user.UserService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 晴 on 2017/3/26.
 */
@Api(value = "API - UserController", description = "用户接口")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;


    @ApiOperation(value = "用户注册", notes = "支持POST方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "username", value = "username", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "password", value = "password", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "nickname", value = "nickname", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "phone", value = "phone", dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public Object register(String username, String password, @RequestParam(required = false) String nickname, @RequestParam(required = false) String phone) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setNickname(nickname);
        user.setPhone(phone);
        User u = userService.addNewUser(user);
        return u;
    }

}

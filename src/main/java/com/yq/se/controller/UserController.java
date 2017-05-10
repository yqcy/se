package com.yq.se.controller;

import com.yq.se.entity.db.User;
import com.yq.se.service.user.UserService;
import com.yq.se.util.mybatis.Page;
import com.yq.se.util.common.SimpleDateUtils;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import static com.yq.se.util.common.StringUtils.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @ApiOperation(value = "查询用户", notes = "支持POST方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "status", value = "status", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "beginTime", value = "beginTime", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "endTime", value = "endTime", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "page", value = "page", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "rows", value = "rows", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "sort", value = "sort", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "order", value = "order", dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/getAll", method = {RequestMethod.GET})
    public Object getAll(@RequestParam(required = false) Integer status, @RequestParam(required = false) String beginTime, @RequestParam(required = false) String endTime, @RequestParam(required = false) Integer page, @RequestParam(required = false) Integer rows, @RequestParam(required = false) String sort, @RequestParam(required = false) String order) {
        Page p = new Page(page, rows);
        List<User> users = userService.queryAllUsers(status, SimpleDateUtils.parse(isNull(beginTime)), SimpleDateUtils.parse(isNull(endTime)), p, sort, order);
        Map map = new HashMap<>();
        map.put("total", p.getCount());
        map.put("rows", users);
        return map;
    }

    @ApiOperation(value = "检查用户名是否已经被注册", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "username", value = "username", dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/check/username", method = {RequestMethod.GET})
    public Object checkUsername(String username) {
        return userService.checkUsername(username);
    }

    @ApiOperation(value = "检查用户是否已经登录", notes = "支持POST方式", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/check/login", method = {RequestMethod.POST})
    public Object checkLogin(@RequestParam(required = false) HttpSession session) {
        Object user = session.getAttribute("user");
        return user != null;
    }

    @ApiOperation(value = "查询12个月的注册量", notes = "支持GET方式", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/charts/query/register", method = {RequestMethod.GET})
    public Object queryMonthRegisterCount() {
        return userService.queryRegisterCountForEveryMonth();
    }

    @ApiOperation(value = "用户登录", notes = "支持POST方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "username", value = "username", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "password", value = "password", dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/login", method = {RequestMethod.POST})
    public Object login(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletRequest request) {
        User user = userService.login(username, password);
        if (user == null) return null;
        HttpSession session = request.getSession(true);
        session.setAttribute("user", user);
        return user;
    }

    @ApiOperation(value = "查询12个月的注册量", notes = "支持GET方式", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/charts/query/login", method = {RequestMethod.GET})
    public Object queryMonthLoginCount() {
        return userService.queryLoginCountForEveryMonth();
    }
}

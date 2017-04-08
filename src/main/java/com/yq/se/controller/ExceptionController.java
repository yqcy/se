package com.yq.se.controller;

import com.yq.se.model.Exception;
import com.yq.se.model.User;
import com.yq.se.service.exception.ExceptionService;
import com.yq.se.util.Page;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

/**
 * Created by wb264139 on 2017/4/7.
 */
@Api(value = "API - ExceptionController", description = "异常接口")
@RestController
@RequestMapping("/exception")
public class ExceptionController {

    @Autowired
    private ExceptionService service;

    @ApiOperation(value = "查询异常", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "fullClassName", value = "fullClassName", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "status", value = "status", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "userId", value = "userId", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "dateType", value = "dateType", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "beginTime", value = "beginTime", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "endTime", value = "endTime", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "pageIndex", value = "pageIndex", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "pageSize", value = "pageSize", dataType = "Int", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/show", method = RequestMethod.GET)
    public Object show(@RequestParam(required = false) Integer id, @RequestParam(required = false) String fullClassName, @RequestParam(required = false) Integer status, @RequestParam(required = false) Integer userId, @RequestParam(required = false) String dateType, @RequestParam(required = false) Date beginTime, @RequestParam(required = false) Date endTime, @RequestParam(required = false) Integer pageIndex, @RequestParam(required = false) Integer pageSize) {
        Exception e = new Exception();
        User user = new User();
        Page page = new Page();
        page.setIndex(pageIndex);
        page.setSize(pageSize);
        user.setId(userId);
        e.setId(id);
        e.setFullClassName(fullClassName);
        e.setStatus(status);
        e.setUser(user);
        List<Exception> exceptions = service.queryAll(e, page, dateType, beginTime, endTime);
        return exceptions;
    }

    @ApiOperation(value = "添加异常信息", notes = "支持POST方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "fullClassName", value = "fullClassName", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "description", value = "description", required = true, dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Object add(String fullClassName, String description, HttpServletRequest request) {
        Exception e = new Exception();
        e.setFullClassName(fullClassName);
        e.setDescription(description);
        HttpSession session = request.getSession(true);
//        e.setUser((User) session.getAttribute("user"));//TODO 强制登录
        User user = new User();
        user.setId(1);
        e.setUser(user);
        Exception exception = service.add(e);
        return exception;
    }


}
package com.yq.se.controller;

import com.yq.se.entity.db.Exception;
import com.yq.se.entity.db.User;
import com.yq.se.filter.LoginFilter;
import com.yq.se.service.exception.ExceptionService;
import com.yq.se.util.common.StringUtils;
import com.yq.se.util.mybatis.Page;
import com.yq.se.util.common.SimpleDateUtils;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.yq.se.util.common.StringUtils.*;

/**
 * Created by wb264139 on 2017/4/7.
 */
@Api(value = "API - ExceptionController", description = "异常接口")
@RestController
@RequestMapping("/exception")
public class ExceptionController {

    @Autowired
    private ExceptionService exceptionService;


    @ApiOperation(value = "查询异常", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "fullClassName", value = "fullClassName", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "status", value = "status", dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "userId", value = "userId", dataType = "Int", paramType = "query"),
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
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public Object show(@RequestParam(required = false) String id, @RequestParam(required = false) String fullClassName, @RequestParam(required = false) Integer status, @RequestParam(required = false) String userId, @RequestParam(required = false) String beginTime, @RequestParam(required = false) String endTime, @RequestParam(required = false) Integer page, @RequestParam(required = false) Integer rows, @RequestParam(required = false) String sort, @RequestParam(required = false) String order) {
        Exception e = new Exception();
        User user = new User();
        Page p = new Page(page, rows);
        user.setId(StringUtils.isNull(userId));
        e.setId(id);
        e.setFullClassName(StringUtils.isNull(fullClassName));
        e.setStatus(status);
        e.setUser(user);
        List<Exception> exceptions = exceptionService.queryAll(e, p, SimpleDateUtils.parse(isNull(beginTime)), SimpleDateUtils.parse(isNull(endTime)), sort, order);
        Map map = new HashMap<>();
        map.put("total", p.getCount());
        map.put("rows", exceptions);
        return map;
    }

    @ApiOperation(value = "首页模糊查询", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "str", value = "str", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "index", value = "index", dataType = "Int", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public Object search(String str, Integer index) {
        Page page = new Page(index, 5);
        List<Exception> exceptions = exceptionService.search(str, page);
        Map map = new HashMap();
        map.put("total", page.getCount());
        map.put("rows", exceptions);
        map.put("total_page", (page.getCount() % page.getSize() == 0) ? page.getCount() / page.getSize() : page.getCount() / page.getSize() + 1);
        map.put("index", index);
        return map;

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
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Object add(String fullClassName, String description, HttpServletRequest request) {
        Exception e = new Exception();
        e.setFullClassName(fullClassName);
        e.setDescription(description);
//        HttpSession session = request.getSession(true);
//        e.setUser((User) session.getAttribute("user"));//TODO 强制登录
        User user = LoginFilter.loginUser;//TODO 动态获取登录用户
        e.setUser(user);
        Exception exception = exceptionService.add(e, 1);
        return exception;
    }

    @ApiOperation(value = "查询12个月份的异常点击量情况", notes = "支持GET方式", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/charts/query/click", method = RequestMethod.GET)
    public Object queryClickCountForCharts() {
        return exceptionService.queryEveryMonthClickCount();
    }

    @ApiOperation(value = "根据ID查询异常", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id", required = true, dataType = "String", paramType = "query")
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/get/id", method = RequestMethod.GET)
    public Object getExceptionById(@RequestParam("id") String id) {
        Exception exception = exceptionService.queryById(id);
        return exception;
    }

    @ApiOperation(value = "查询所有异常的全限定名", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/name/getAll", method = RequestMethod.GET)
    public Object getAllExceptionName() {
        List<String> strings = exceptionService.queryAllExceptionName();
        return strings;
    }

    @ApiOperation(value = "查询所有当前用户解决的异常信息", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "userId", value = "当前用户的主键", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "beginTime", value = "开始时间", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "endTime", value = "结束时间", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "sort", value = "排序的字段", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "order", value = "排序的规则:DESC ASC", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "page", value = "当前的页号", required = false, dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "rows", value = "每页显示的条数", required = false, dataType = "Int", paramType = "query")
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/getAll/provider", method = RequestMethod.GET)
    public Object getAllByProvider(@RequestParam(value = "userId") String userId, @RequestParam(value = "beginTime", required = false) String beginTime, @RequestParam(value = "endTime", required = false) String endTime, @RequestParam(value = "sort", required = false) String sort, @RequestParam(value = "order", required = false) String order, @RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "rows", required = false) Integer rows) {
        Page p = new Page(page, rows);
        List<Exception> exceptions = exceptionService.queryAll(userId, p, SimpleDateUtils.parse(beginTime), SimpleDateUtils.parse(endTime), sort, order);
        return exceptions;
    }

    @ApiOperation(value = "修改异常的审核状态", notes = "支持POST方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "changes", value = "需要修改的异常的JSON串", required = true, dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/modify", method = RequestMethod.POST)
    public Object modify(String changes) {
        return exceptionService.modify(changes);
    }

}

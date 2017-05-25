package com.yq.se.controller;

import com.yq.se.entity.db.Exception;
import com.yq.se.entity.db.Solve;
import com.yq.se.entity.db.User;
import com.yq.se.service.solve.SolveService;
import com.yq.se.util.mybatis.Page;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by 晴 on 2017/5/13.
 */
@Api(value = "API - SolveController", description = "解决方案接口")
@RestController
@RequestMapping("/solve")
public class SolveController {

    @Autowired
    private SolveService solveService;

    @ApiOperation(value = "查询解决方案", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "exceptionId", value = "异常的主键", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "userId", value = "创建用户的主键", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "sort", value = "需要排序的字段", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "order", value = "排序规则：DESC ASC", required = false, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "page", value = "当前的页号", required = false, dataType = "Int", paramType = "query"),
            @ApiImplicitParam(name = "rows", value = "每页的条数", required = false, dataType = "Int", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/query", method = RequestMethod.GET)
    public Object query(@RequestParam(value = "exceptionId", required = false) String exceptionId, @RequestParam(value = "userId", required = false) String userId, @RequestParam(value = "sort", required = false) String sort, @RequestParam(value = "order", required = false) String order, @RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "rows", required = false) Integer rows) {
        Page p = new Page(page, rows, sort + " " + order);
        if (sort == null || order == null) p.setOrder(null);
        List<Solve> solves = solveService.select(exceptionId, userId, p);
        return solves;
    }

    @ApiOperation(value = "创建新的解决方案", notes = "支持POST方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "exceptionId", value = "异常的主键", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "userId", value = "创建用户的主键", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "solution", value = "解决方案", required = true, dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Object create(@RequestParam("exceptionId") String exceptionId, @RequestParam("userId") String userId, @RequestParam("solution") String solution) {
        Solve solve = new Solve();
        Exception exception = new Exception();
        exception.setId(exceptionId);
        User user = new User();
        user.setId(userId);
        solve.setException(exception);
        solve.setUser(user);
        solve.setSolution(solution);
        Solve insert = solveService.insert(solve);
        return insert;
    }

    @ApiOperation(value = "用户点击赞", notes = "支持POST方式", response = String.class)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "solveId", value = "解决方案的主键", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "userId", value = "点击用户的主键", required = false, dataType = "String", paramType = "query"),
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/agree", method = RequestMethod.POST)
    public Object agree(@RequestParam("solveId") String solveId, @RequestParam(value = "userId", required = false) String userId) {
        //TODO 预留用户主键
        Solve solve = solveService.addScore(solveId);
        return solve;
    }

}

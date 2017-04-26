package com.yq.se.controller;

import com.yq.se.service.freemarker.FreemarkerServiceImpl;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by wb264139 on 2017/4/26.
 */
@Api(value = "API - DocController", description = "文档接口")
@RestController
@RequestMapping("/doc")
public class DocController {

    @Autowired
    private FreemarkerServiceImpl freemarkerService;

    @ApiOperation(value = "markdown文档生成", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successful — 请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/markdown/create", method = RequestMethod.GET)
    public Object createMarkdown() {
        freemarkerService.createMarkdownDocument();
        return true;
    }

    @ApiOperation(value = "markdown文档下载", notes = "支持GET方式", response = String.class)
    @ApiImplicitParams({})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successful — 请求已完成"),
            @ApiResponse(code = 400, message = "请求中有语法问题，或不能满足请求"),
            @ApiResponse(code = 401, message = "未授权客户机访问数据"),
            @ApiResponse(code = 404, message = "服务器找不到给定的资源；文档不存在"),
            @ApiResponse(code = 500, message = "服务器不能完成请求")}
    )
    @RequestMapping(value = "/markdown/download", method = RequestMethod.GET)
    public void downloadMarkdown(HttpServletResponse response) {
        response.setHeader("content-type", "application/octet-stream");
        response.setHeader("content-disposition", "attachment; filename=supplychain-interfaces-doc-markdown.md");
        try {
            freemarkerService.downloadMarkdown(response.getOutputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
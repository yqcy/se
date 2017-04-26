package com.yq.se.service.freemarker;

import com.yq.se.entity.ftl.Controller;
import com.yq.se.entity.ftl.Interface;
import com.yq.se.entity.ftl.Markdown;
import com.yq.se.entity.ftl.Paramter;
import com.yq.se.util.common.ReflectUtils;
import com.yq.se.util.common.StringUtils;
import com.yq.se.util.freemarker.FreemarkerUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.*;
import java.lang.reflect.Method;
import java.util.*;

/**
 * Created by wb264139 on 2017/4/25.
 */
@Service
public class FreemarkerServiceImpl {

    @Value("${freemarker.project.url}")
    private String projectUrl;

    @Value("${freemarker.controller.path}")
    private String controllerPath;

    @Value("${freemarker.ftl.path}")
    private String ftlPath;

    @Value("${freemarker.doc.path}")
    private String docPath;

    /**
     * 创建markdown文档
     */
    @Async
    public void createMarkdownDocument() {
        Markdown m = new Markdown();
//        String projectUrl = "http://localhost:9000";
        String s = System.getProperty("file.separator");//系统分隔符
        File file = new File(controllerPath);
        Collection<File> files = FileUtils.listFiles(file, null, true);
        //遍历所有的controller
        List<Controller> controllers = new ArrayList<>();
        m.setControllers(controllers);
        controller:
        for (File f : files) {
            Controller c = new Controller();//定义新的controller
            controllers.add(c);
            String replace = StringUtils.replace(f.getPath(), s, ".");
            String removePrefix = StringUtils.removePrefix(replace, "src.main.java.");
            String removeSuffix = StringUtils.removeSuffix(removePrefix, ".java");
            Class clz = ReflectUtils.getClass(removeSuffix);
            RequestMapping classRequestMapping = (RequestMapping) clz.getAnnotation(RequestMapping.class);
            Api api = (Api) clz.getAnnotation(Api.class);
            String name = "";
            if (api != null) {
                name = api.value();
                name = name + api.description();
            }
            c.setName(name);//设置controller.name
            String[] path1 = null;
            if (classRequestMapping != null) path1 = classRequestMapping.value();
            Method[] declaredMethods = clz.getDeclaredMethods();
            List<Interface> interfaces = new ArrayList<>();
            c.setInterfaces(interfaces);
            method:
            for (Method method : declaredMethods) {
                Interface i = new Interface();//定义新的interface
                interfaces.add(i);
                //获取path
                RequestMapping methodRequestMapping = method.getAnnotation(RequestMapping.class);
                String path = "";
                if (path1 != null && path1.length > 0) path = path + path1[0];
                if (methodRequestMapping != null) {
                    String[] path2 = methodRequestMapping.value();
                    if (path2 != null && path2.length > 0) path = path + path2[0];
                }
                i.setPath(path);//设置interface.path
                //获取function
                ApiOperation apiOperation = method.getAnnotation(ApiOperation.class);
                String function = "";
                if (apiOperation != null) function = apiOperation.value();
                i.setFunction(function);//设置interface.function
                //获取请求方式
                RequestMethod[] requestMethods = null;
                if (methodRequestMapping != null) requestMethods = methodRequestMapping.method();
                String requestType = "";
                if (requestMethods != null && requestMethods.length > 0) {
                    for (RequestMethod requestMethod : requestMethods) {
                        requestType = requestType + requestMethod.name() + "，";
                    }
                } else {
                    requestType = "GET";
                }
                //设置请求类型
                i.setRequestType(StringUtils.removeSuffix(requestType, "，"));
                //设置参数
                ApiImplicitParams apiImplicitParams = method.getAnnotation(ApiImplicitParams.class);
                ApiImplicitParam[] implicitParams = null;
                if (apiImplicitParams != null) implicitParams = apiImplicitParams.value();
                //为后面的请求参数定义map
                Map<String, String> map = new HashMap<>();
                if (implicitParams != null && implicitParams.length > 0) {
                    List<Paramter> paramters = new ArrayList<>();
                    for (ApiImplicitParam implicitParam : implicitParams) {
                        //设置param参数
                        String paramName = implicitParam.name();
                        String paramType = implicitParam.dataType();
                        map.put(paramName, implicitParam.defaultValue());//拼接了参数
                        Paramter p = new Paramter(paramName, paramType);
                        paramters.add(p);
                    }
                    i.setParamters(paramters);
                }
                //设置返回结果
                String url = projectUrl + i.getPath();//拼接成http://localhost:9000/xxx的形式
                String requestResult = null;
                //try调接口时出现的异常
                try {
                    if (i.getRequestType() != null) {
                        if (i.getRequestType().indexOf(RequestMethod.GET.name()) != -1) {
                            requestResult = HttpClientUtil.getHttpUrl(url, map);//TODO 自实现HttpClient

                        } else if (i.getRequestType().indexOf(RequestMethod.POST.name()) != -1) {
                            requestResult = HttpClientUtil.postHttpUrl(url, map);
                        }
                    }
                } catch (Exception e) {
//                    e.printStackTrace();//不要打印，异常信息太多
                    continue method;
                } finally {
                    //设置接口的返回值
                    i.setResult(requestResult);
                }
            }
        }
        try {
            FreemarkerUtils.create(m);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Async
    public void downloadMarkdown(OutputStream out) {
        File file = new File(docPath + "/Markdown.md");
        FileInputStream fis = null;
        try {
            fis = new FileInputStream(file);
            IOUtils.copy(fis, out);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                out.flush();
                fis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}

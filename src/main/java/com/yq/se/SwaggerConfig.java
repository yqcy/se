package com.yq.se;

import com.google.common.base.Predicate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static com.google.common.base.Predicates.or;
import static springfox.documentation.builders.PathSelectors.regex;


/**
 * Created by fyang on 16/10/19.
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Value("${server.servlet-path}")
    private String servletPath;

    private ApiInfo initApiInfo() {
        ApiInfo apiInfo = new ApiInfo("异常日常管理",//大标题
                initContextInfo(),//简单的描述
                "1.0.0",//版本
                "服务条款",
                "明天丶天晴",//作者
                "异常搜索系统",//链接显示文字
                "http://localhost:8989/page/main.html"//网站链接
        );

        return apiInfo;
    }

    private String initContextInfo() {
        StringBuffer sb = new StringBuffer();
        sb.append("REST API 设计文档,方便前后端联调。");
//                .append("<br/>")
//                .append("To do more!");
        return sb.toString();
    }


    @Bean
    public Docket restfulApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("RestfulApi")
                .genericModelSubstitutes(ResponseEntity.class)
                .useDefaultResponseMessages(true)
                .forCodeGeneration(false)
                .pathMapping(servletPath) // base，最终调用接口后会和paths拼接在一起
                .select()
                .paths(doFilteringRules())
                .build()
                .apiInfo(initApiInfo());
    }


    /**
     * 设置过滤规则
     * 这里的过滤规则支持正则匹配
     *
     * @return
     */
    private Predicate<String> doFilteringRules() {
        return or(
                regex("/user.*"),
                regex("/exception.*"),
                regex("/solve.*")
        );
    }

}

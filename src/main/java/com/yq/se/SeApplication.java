package com.yq.se;

import com.yq.se.mapper.UserMapper;
import com.yq.se.model.User;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import javax.sql.DataSource;

/**
 * Created by 晴 on 2017/2/26.
 */
@SpringBootApplication
public class SeApplication implements ApplicationListener<ApplicationReadyEvent> {

    public static void main(String[] args) {
//        SpringApplication.run(SeApplication.class, args);
        SpringApplication sa = new SpringApplication(SeApplication.class);
        sa.addListeners(new SeApplication());//添加监听类
        sa.run(args);
    }

//    @Autowired
//    private DataSource dataSource;
//
//    @Bean("sqlSessionFactory")
//    public SqlSessionFactory getSqlSessionFactory() {
//        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
//        bean.setDataSource(dataSource);
//        bean.setTypeAliasesPackage("com.yq.se.model");
//        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
//        try {
//            bean.setMapperLocations(resolver.getResources("classpath:mapper/*Mapper.xml"));
//            return bean.getObject();
//        } catch (Exception e) {
//            e.printStackTrace();
//            throw new RuntimeException(e);
//        }
//    }
//
//    @Bean("sqlSessionTemplate")
//    public SqlSessionTemplate getSqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
//        return new SqlSessionTemplate(sqlSessionFactory);
//    }

    /**
     * 工厂启动事件监听
     * @param applicationReadyEvent
     */
    @Override
    public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
    }
}

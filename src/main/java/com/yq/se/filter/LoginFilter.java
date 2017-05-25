package com.yq.se.filter;

import com.yq.se.entity.db.User;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by 晴 on 2017/4/21.
 */
@Component
@WebFilter(urlPatterns = {"/user/*", "/exception/*"})
@Order(1)
public class LoginFilter implements Filter {

    public static User loginUser;//TODO 假数据

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpSession session = request.getSession(true);
        loginUser = (User) session.getAttribute("user");
        if (loginUser == null) {
            loginUser = new User();
            loginUser.setId("1");
            loginUser.setStatus(1);
            loginUser.setPhone("18730032506");
            loginUser.setUsername("111@q.com");
            loginUser.setNickname("明天丶天晴");
        }
        if (loginUser != null) {
            filterChain.doFilter(request, response);
        } else {
            response.sendRedirect("http://localhost:8989/pages/login_register_test.html");
        }
//        HttpServletResponse response = (HttpServletResponse) servletResponse;
//        response.sendRedirect("http://localhost:8989/pages/login.html");
    }

    @Override
    public void destroy() {

    }
}

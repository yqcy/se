package com.yq.se.filter;

import com.yq.se.entity.db.User;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by 晴 on 2017/4/21.
 */
//@Component
//@WebFilter(urlPatterns = {"/user/*", "/exception/*"})
//@Order(1)
public class LoginFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpSession session = request.getSession(true);
        Object user = session.getAttribute("user");
        if (user == null) {
            User loginUser = new User();
            loginUser.setNickname("明天丶天晴");
        }
        if (user != null) {
            filterChain.doFilter(servletRequest, servletResponse);
        }
//        HttpServletResponse response = (HttpServletResponse) servletResponse;
//        response.sendRedirect("http://localhost:8989/pages/login.html");
    }

    @Override
    public void destroy() {

    }
}

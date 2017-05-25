package com.yq.se.service.menu;

import com.yq.se.entity.db.Menu;

import java.util.List;

/**
 * Created by wb264139 on 2017/4/13.
 */
public interface MenuService {
    int add(Menu menu);

    List<Menu> queryAllParents();

    List<Menu> queryAllChidren(Integer pid);
}

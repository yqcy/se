package com.yq.se.service.menu;

import com.yq.se.entity.db.Menu;
import com.yq.se.mapper.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by wb264139 on 2017/4/13.
 */
@Service
public class MenuServiceImpl implements MenuService {
    @Autowired
    private MenuMapper mapper;

    @Override
    public int add(Menu menu) {
        if (menu == null) return 0;
        return mapper.insert(menu);
    }

    @Override
    public List<Menu> queryAllParents() {
        return mapper.selectParents();
    }

    @Override
    public List<Menu> queryAllChidren(Integer pid) {
        if (pid == null) return null;
        return mapper.selectChidren(pid);
    }
}

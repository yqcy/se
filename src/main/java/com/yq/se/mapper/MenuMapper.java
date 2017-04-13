package com.yq.se.mapper;

import com.yq.se.entity.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by wb264139 on 2017/4/13.
 */
@Mapper
public interface MenuMapper {
    int insert(@Param("menu")Menu menu);

    int delete();

    int update();

    Menu selectById();

    List<Menu> selectAll();

    List<Menu> selectParents();

    List<Menu> selectChidren(@Param("pid") Integer pid);

}

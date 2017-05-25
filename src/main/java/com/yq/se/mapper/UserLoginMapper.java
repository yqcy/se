package com.yq.se.mapper;

import com.yq.se.entity.db.UserLogin;
import com.yq.se.entity.dto.MonthCount;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by 晴 on 2017/5/10.
 */
@Mapper
public interface UserLoginMapper {
    int insert(@Param("userLogin") UserLogin userLogin);

    List<MonthCount> selectLoginCountForEveryMonth();
}

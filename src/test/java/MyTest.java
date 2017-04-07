import com.yq.se.SeApplication;
import com.yq.se.enu.Status;
import com.yq.se.mapper.ExceptionMapper;
import com.yq.se.mapper.UserMapper;
import com.yq.se.model.Exception;
import com.yq.se.model.User;
import com.yq.se.util.Page;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

import javax.sql.DataSource;
import java.util.Date;
import java.util.List;

/**
 * Created by 晴 on 2017/2/26.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {SeApplication.class})
public class MyTest {


    @Autowired
    private UserMapper userMapper;

    @Test
    public void test1() {
        System.out.println("这是测试");
    }

    @Test
    public void testEnum() {
        System.out.println(Status.CHECK.getStatus());
        System.out.println(Status.DELETE.getStatus());
        System.out.println(Status.PASS.getStatus());
    }

    @Test
    public void testMapper() {
        System.out.println(exceptionMapper);
        Exception e = new Exception();
        e.setClassFullName("java.lang.RuntimeException");
        e.setCreateDate(new Date());
        e.setDescription("这是一个神奇的异常");
        e.setLastUpdate(new Date());
        e.setStatus(0);
        User u = new User();
        u.setId(1);
        e.setUser(u);
        exceptionMapper.add(e);
    }


    @Test
    public void testUserMapper() {
        User user = new User();
        user.setUsername("yangqing");
        user.setStatus(1);
        user.setCreateDate(new Date());
        user.setNickname("明天丶天晴");
        user.setPassword("123456");
        user.setPhone("13260233729");
        user.setId(0);
        User u = userMapper.queryById(1);
        System.out.println(u);
    }

    @Test
    public void testModify() {
        User user = new User();
        user.setNickname("晴");
        user.setId(1);
        userMapper.modify(user);
    }

    @Autowired
    private ExceptionMapper exceptionMapper;
    @Test
    public void testAddException() {
        Exception e = new Exception();
        User u = new User();
        u.setId(1);
        e.setUser(u);
        e.setCreateDate(new Date());
        e.setStatus(1);
        e.setDescription("这是测试的异常");
        e.setClassFullName("java.lang.NotFoundException");
        exceptionMapper.add(e);
    }
    @Test
    public void testQueryException() {
//        Exception exception = exceptionMapper.queryById(1);
//        exception.setClassFullName("java.lang.OutIndexException");
//        exceptionMapper.modify(exception);
        Page page = new Page();
        page.setCount(1);
        page.setIndex(1);
        page.setSize(1);
        List<Exception> exceptions = exceptionMapper.queryAll(page, 1);

        System.out.println(exceptions.get(0));
    }
}

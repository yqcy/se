import com.yq.se.SeApplication;
import com.yq.se.model.User;
import com.yq.se.service.user.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.sql.DataSource;
import java.util.List;

/**
 * Created by 晴 on 2017/3/19.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {SeApplication.class})
public class TestApplication {
    @Autowired
    private DataSource dataSource;

    @Autowired
    private UserService userService;

    @Test
    public void test1() {
        System.out.println(dataSource);
    }

    @Test
    public void addUser() {
        List<User> users = userService.queryAllUsers(1, 5);
        System.out.println(users.size());
    }

}

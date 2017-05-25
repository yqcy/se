import com.yq.se.SeApplication;
import com.yq.se.entity.db.Menu;
import com.yq.se.service.menu.MenuService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by wb264139 on 2017/4/13.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = SeApplication.class)
public class TestMenu {
    @Autowired
    private MenuService service;

    @Test
    public void insert() {
        Menu menu = new Menu();
        menu.setName("用户授权");
        menu.setPid(1);
        service.add(menu);
    }
}

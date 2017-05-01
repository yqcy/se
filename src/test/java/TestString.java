import com.yq.se.util.common.StringUtils;
import org.junit.Test;

/**
 * Created by 晴 on 2017/5/1.
 */
public class TestString {
    @Test
    public void test1() {
        System.out.println("A:" + (int) 'A');
        System.out.println("Z:" + (int) 'Z');
        System.out.println("a:" + (int) 'a');
        System.out.println("z:" + (int) 'z');
    }

    @Test
    public void test2() {
        String name = "craeteDateUtil";

        String s = StringUtils.changeToDBName(name);

        System.out.println(s);
    }
}

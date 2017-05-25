import org.junit.Test;

/**
 * Created by wb264139 on 2017/4/14.
 */
public class TestClass {
    @Test
    public void test() {
        Class<Integer> integerClass = Integer.class;
        System.out.println(integerClass.getName());
        System.out.println(integerClass.getTypeName());
    }
}

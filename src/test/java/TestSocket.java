import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

/**
 * Created by wb264139 on 2017/4/12.
 */
public class TestSocket {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",8888);//配置要发送的IP和端口
            OutputStream outputStream = socket.getOutputStream();//获取输出流
            outputStream.write(new byte[32]);//写32 byte的数据
            outputStream.flush();//刷新流
            socket.close();//关闭-
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

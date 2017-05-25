package com.yq.se.util.servlet;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.BasicHttpEntity;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import java.io.*;
import java.net.URI;
import java.util.Map;

/**
 * Created by 晴 on 2017/4/26.
 */
public class HttpClientUtils {

    public static String doGet(String url, Map<String, String> params) throws Exception {
        CloseableHttpClient httpClient = null;
        CloseableHttpResponse httpResponse = null;
        //拼接参数
        StringBuilder sb = new StringBuilder(url);
        if (params != null) {
            sb.append("?");
            for (Map.Entry<String, String> entry : params.entrySet()) {
                sb.append(entry.getKey()).append("=").append(entry.getValue());
            }
        }
        try {
            httpClient = HttpClients.createDefault();
            HttpGet get = new HttpGet(sb.toString());
            httpResponse = httpClient.execute(get);
            HttpEntity entity = httpResponse.getEntity();
            InputStream in = entity.getContent();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            byte[] bs = new byte[2048];
            int length = bs.length;
            int position = -1;
            while ((position = in.read(bs, 0, length)) != -1) {
                baos.write(bs, 0, position);
                baos.flush();
            }
            byte[] bytes = baos.toByteArray();
            String result = new String(bytes);
            return result;
        } finally {
            httpResponse.close();
            httpClient.close();
        }
    }

    public static String doPost(String url, Map<String, String> params) throws Exception {
        CloseableHttpClient httpClient = null;
        CloseableHttpResponse httpResponse = null;
        try {
            httpClient = HttpClients.createDefault();
            HttpPost post = new HttpPost(url);
            StringBuilder sb = new StringBuilder();
            if (params != null) {
                sb.append("?");
                for (Map.Entry<String, String> entry : params.entrySet()) {
                    sb.append(entry.getKey()).append("=").append(entry.getValue());
                }
            }
            StringEntity stringEntity = new StringEntity(sb.toString());
            post.setEntity(stringEntity);
            httpResponse = httpClient.execute(post);
            HttpEntity entity = httpResponse.getEntity();
            InputStream in = entity.getContent();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            byte[] bs = new byte[2048];
            int length = bs.length;
            int position = -1;
            while ((position = in.read(bs, 0, length)) != -1) {
                baos.write(bs, 0, position);
                baos.flush();
            }
            byte[] bytes = baos.toByteArray();
            String result = new String(bytes);
            return result;
        } finally {
            httpResponse.close();
            httpClient.close();
        }
    }


}

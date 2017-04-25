package com.yq.se.util.freemarker;

import com.yq.se.util.common.StringUtils;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateExceptionHandler;

import java.io.File;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wb264139 on 2017/4/25.
 */
public class FreemarkerUtils {

    public static void create(Object object) throws Exception {
        create("UTF-8", "src/main/resources/ftl", object);
    }

    public static void create(String encoding, String ftlPath, Object object) throws Exception {
        if (object == null) return;
        String classSimpleName = object.getClass().getSimpleName();
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_23);
        cfg.setDefaultEncoding((encoding == null) ? "UTF-8" : encoding);
        cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
        cfg.setLogTemplateExceptions(false);
        cfg.setDirectoryForTemplateLoading(new File(ftlPath));//写死的路径
        Template template = cfg.getTemplate(classSimpleName + ".ftl");
        Writer out = new OutputStreamWriter(System.out);//TODO 改成FileOutputStream
        Map<String, Object> root = new HashMap<>();
        root.put(StringUtils.toLowerCaseForFirstWord(classSimpleName), object);
        template.process(root, out);
    }

}

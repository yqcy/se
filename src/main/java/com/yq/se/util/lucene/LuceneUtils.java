package com.yq.se.util.lucene;

import com.yq.se.anno.lucene.ToDocTag;
import com.yq.se.util.common.MyReflectUtils;
import com.yq.se.util.common.ReflectUtils;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.TokenStream;
import org.apache.lucene.analysis.tokenattributes.CharTermAttribute;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.*;
import org.apache.lucene.queryparser.classic.MultiFieldQueryParser;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.search.*;
import org.apache.lucene.search.highlight.*;
import org.apache.lucene.search.highlight.Scorer;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;

import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 晴 on 2017/1/7.
 */
public class LuceneUtils {


    /**
     * 把对象转换成Document对象
     *
     * @param o 要转换的实体对象
     * @return
     */
    public static Document toDoc(Object o) {

        Document doc = new Document();

        //获得实体类的类对象
        Class<?> clz = o.getClass();

        //拿到该类对象中所有定义属性
        Field[] declaredFields = clz.getDeclaredFields();

        //进行遍历
        for (Field f : declaredFields) {

            f.setAccessible(true);

            ToDocTag anno = f.getAnnotation(ToDocTag.class);

            if (anno != null) {

                try {
                    String value = anno.value();
                    if (value == null || value.equals("")) {
                        value = f.getName();
                    }
                    doc.add(getIndexableField(anno.type(), value, f.get(o).toString(), anno.store(), anno.boost()));
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            }

        }
        return doc;
    }

    /**
     * 根据字符串获得IndexableField对象
     *
     * @param value
     * @param boost
     * @return
     */
    private static IndexableField getIndexableField(String index, String name, String value, boolean store, float boost) {
        if ("string".equalsIgnoreCase(index)) {
            if (store) {
                StringField sf = new StringField(name, value, org.apache.lucene.document.Field.Store.YES);
                sf.setBoost(boost);
                return sf;
            } else {
                return new StringField(name, value, org.apache.lucene.document.Field.Store.NO);
            }
        } else if ("text".equalsIgnoreCase(index)) {
            if (store) {
                TextField tf = new TextField(name, value, org.apache.lucene.document.Field.Store.YES);
                tf.setBoost(boost);
                return tf;
            } else {
                return new TextField(name, value, org.apache.lucene.document.Field.Store.NO);
            }
        }
        return null;
    }

    /**
     * 提交索引文档
     */
    private static void commit(IndexWriter iw) {
        if (iw != null) {
            try {
                iw.commit();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * 关闭IO流
     *
     * @param iw
     */
    private static void close(IndexWriter iw) {
        if (iw != null) {
            try {
                iw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
    }

    /**
     * 刷新流
     *
     * @param iw
     */
    private static void flush(IndexWriter iw) {
        try {
            iw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 提交并关闭
     *
     * @param iw
     */
    private static void commitAndFlush(IndexWriter iw) {
        flush(iw);
        commit(iw);
//        close(iw);
    }

    /**
     * 添加索引文档并关闭流
     *
     * @param iw
     * @param doc
     */
    public static void addDocumentBeforeClose(IndexWriter iw, Document doc) {
        try {
            iw.addDocument(doc);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            commitAndFlush(iw);
        }
    }

    /**
     * 更新索引文档提交后关闭流
     *
     * @param iw
     * @param term
     * @param doc
     */
    public static void updateDocumentBeforeClose(IndexWriter iw, Term term, Document doc) {

        try {
            iw.updateDocument(term, doc);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            commitAndFlush(iw);
        }
    }

    public static void deleteDocumentBeforeClose(IndexWriter iw, Term term) {

        try {
            iw.deleteDocuments(term);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            commitAndFlush(iw);
        }
    }

    /**
     * @param is
     * @param query
     * @param n     查询结果数量
     * @param obj   目标对象的类对象
     * @return
     */
    public static List<Object> search(IndexSearcher is, Query query, Analyzer analyzer, int n, Object obj) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        TopDocs ts = getTopDocs(is, query, n);

        List<Document> list = getDocuments(is, ts);

        List transfer = transfer(obj.getClass(), query, analyzer, list.toArray(new Document[list.size()]));

        return transfer;


    }

    /**
     * 对全文检索的对象进行格式化高亮显示
     *
     * @param prefix    格式化前缀
     * @param suffix    格式化后缀
     * @param query     查询对象
     * @param analyzer  分词器
     * @param fieldName 格式代的属性名
     * @param text      文档中存储内容
     * @return
     */
    public static String formatter(String prefix, String suffix, Query query, Analyzer analyzer, String fieldName, String text) {
        Formatter formatter = new SimpleHTMLFormatter(prefix, suffix);

        Scorer scorer = new QueryTermScorer(query);

        Highlighter highlighter = new Highlighter(formatter, scorer);
        String value = null;

        try {
            value = highlighter.getBestFragment(analyzer, fieldName, text);//TODO 这里text会报空指针
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InvalidTokenOffsetsException e) {
            e.printStackTrace();
        }
        return value;


    }

    public static TopDocs getTopDocs(IndexSearcher is, Query query, int n) throws IOException {
        TopDocs topDocs = is.search(query, n);
        return topDocs;
    }

    public static List<Document> getDocuments(IndexSearcher is, TopDocs ts) throws IOException {
        ScoreDoc[] scoreDocs = ts.scoreDocs;

        List<Document> list = new ArrayList<>(scoreDocs.length);
        for (ScoreDoc s : scoreDocs) {
            int i = s.doc;
            Document doc = is.doc(i);
            list.add(doc);
        }
        return list;
    }

    /**
     * 进行格式化对象
     * 属性上有highlight注解的需要高亮处理
     *
     * @param clz
     * @param query
     * @param analyzer
     * @param docs
     * @return
     * @throws NoSuchMethodException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     */
    private static List<Object> transfer(Class clz, Query query, Analyzer analyzer, Document... docs) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        //初始化容器集合
        List list = new ArrayList();
        if (docs != null) {
            for (int i = 0; i < docs.length; i++) {
                //添加创建的对象到集合中
                Object obj = ReflectUtils.getObjectByClass(clz);
                list.add(obj);

                Document doc = docs[i];

                Field[] declaredFields = clz.getDeclaredFields();

                for (Field fd : declaredFields) {
                    fd.setAccessible(true);

                    //拿属性上面的标志注解
                    ToDocTag anno = fd.getAnnotation(ToDocTag.class);

                    //判断属性上方是否有注解
                    //如果有则反射对对象进行赋值
                    if (anno != null) {

                        /**
                         * 判断是否在文档中进行过存储
                         */
                        if (anno.store()) {
                            String fieldName = anno.value();

                            if (fieldName == null || fieldName.equals("")) {
                                fieldName = fd.getName();
                            }

                            //获得文档对象中的在注解中存储的键相对应的值
                            String text = doc.get(fieldName);


                            String value = formatter("<strong><font color='red'>", "</font></strong>", query, analyzer, fieldName, text);
                            //判断是否需要进行高亮显示
                            if (!query.getClass().equals(MatchAllDocsQuery.class) && anno.highlight()) {//需要高亮显示的情况
                                if (anno.isId() || value == null) {
                                    value = text;
                                }
                            } else {//不需要高亮显示的情况
                                value = text;
                            }
                            String methodName = MyReflectUtils.setMethodName(fd.getName());
                            Method method = obj.getClass().getDeclaredMethod(methodName, String.class);
                            method.invoke(obj, value);
                        }
                    }
                }
            }
        }
        /**
         * 把此集合返回
         */
        return list;
    }

    /**
     * 获得IndexReader
     *
     * @param dir
     * @return
     */

    public static IndexReader getIndexReader(Directory dir) throws IOException {
        return DirectoryReader.open(dir);
    }

    /**
     * 获得IndexSearch
     *
     * @param reader
     * @return
     */
    public static IndexSearcher getIndexSearcher(IndexReader reader) {
        return new IndexSearcher(reader);
    }

    /**
     * 获得Directory
     *
     * @param path
     * @return
     */
    public static Directory getDirectory(String path) throws IOException {
        return FSDirectory.open(Paths.get(path));
    }

    public static IndexWriter getIndexWriter(String path, Analyzer analyzer) throws IOException {
        return new IndexWriter(getDirectory(path), new IndexWriterConfig(analyzer));
    }

    /**
     * 获得MultiFieldQuery
     *
     * @param v
     * @param fields
     * @param analyzer
     * @param keyword
     * @return
     */
    public static Query getMultiFieldQuery(Version v, String[] fields, Analyzer analyzer, String keyword) throws ParseException {
        return new MultiFieldQueryParser(fields, analyzer).parse(keyword);
    }

    /**
     * 对分词的测试方法
     * 查看分词器分词之后的结果
     *
     * @param analyzer
     * @param text
     */
    public static void printAnalyzerValue(Analyzer analyzer, String text) throws IOException {
        TokenStream tokenStream = analyzer.tokenStream("test", text);

        tokenStream.addAttribute(CharTermAttribute.class);

        tokenStream.reset();

        while (tokenStream.incrementToken()) {

            CharTermAttribute charTermAttribute = tokenStream.getAttribute(CharTermAttribute.class);

            System.out.println(charTermAttribute.toString());

        }
    }
}

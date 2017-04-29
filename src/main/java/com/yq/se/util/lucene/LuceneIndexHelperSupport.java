package com.yq.se.util.lucene;

import com.yq.se.util.common.MyReflectUtils;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.CharArraySet;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.MatchAllDocsQuery;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.TermQuery;
import org.apache.lucene.store.Directory;
import org.apache.lucene.util.Version;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 晴 on 2017/1/7.
 */
public class LuceneIndexHelperSupport<T> implements LuceneIndexHelper<T> {
    private IndexWriter indexWriter;

    private Analyzer analyzer;

    private Directory directory;

    private IndexReader indexReader;

    private IndexSearcher indexSearcher;

    private CharArraySet stopWords;


    public LuceneIndexHelperSupport() {
        this("lucene_local_repository", new StandardAnalyzer());
    }

    public LuceneIndexHelperSupport(String path) {
        this(path, new StandardAnalyzer());
    }

    public LuceneIndexHelperSupport(String path, Analyzer analyzer) {
        this.analyzer = analyzer;
        try {
            this.directory = LuceneUtils.getDirectory(path);
            this.indexWriter = LuceneUtils.getIndexWriter(path, analyzer);
        } catch (IOException e) {
            e.printStackTrace();
        }
//        this.indexReader = LuceneUtils.getIndexReader(this.directory);
//        this.indexSearcher = new IndexSearcher(indexReader);
    }


    @Override
    public void add(T t) {
        Document doc = LuceneUtils.toDoc(t);
        LuceneUtils.addDocumentBeforeClose(indexWriter, doc);
    }

    @Override
    public void modify(T t) {
        String value = MyReflectUtils.fieldValue(t, "id");
        Document doc = LuceneUtils.toDoc(t);
        LuceneUtils.updateDocumentBeforeClose(indexWriter, new Term("id", value), doc);
    }

    @Override
    public void delete(String id) {
        LuceneUtils.deleteDocumentBeforeClose(indexWriter, new Term("id", id));
    }

    @Override
    public List<T> queryByKeyword(String keyword, T t, int n) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, ParseException {
        init();
        String[] fields = MyReflectUtils.getFields(t.getClass());
        Query query = LuceneUtils.getMultiFieldQuery(Version.LUCENE_6_3_0, fields, this.analyzer, keyword);
//        Term term = new Term("description", keyword);
//        Query query = new TermQuery(term);
        List<Object> list = LuceneUtils.search(indexSearcher, query, this.analyzer, n, t);
        return transfer(list);
    }

    @Override
    public List<T> queryAll(T t, int i) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        init();
        Query query = new MatchAllDocsQuery();
        List<Object> objects = LuceneUtils.search(indexSearcher, query, this.analyzer, i, t);
        return transfer(objects);
    }

    private final void init() throws IOException {
        if (indexReader == null) {
            indexReader = LuceneUtils.getIndexReader(directory);
        }
        if (indexSearcher == null) {
            indexSearcher = new IndexSearcher(this.indexReader);
        }
    }


    private final List<T> transfer(List<Object> objs) {
        List<T> list = new ArrayList<T>();
        if (objs != null) {
            for (Object o : objs) {
                list.add((T) o);
            }
        }
        return list;
    }

}

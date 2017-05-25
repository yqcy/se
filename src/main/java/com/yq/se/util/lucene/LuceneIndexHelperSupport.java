package com.yq.se.util.lucene;

import com.yq.se.util.common.MyReflectUtils;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.Term;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.MatchAllDocsQuery;
import org.apache.lucene.search.Query;
import org.apache.lucene.store.Directory;
import org.apache.lucene.util.Version;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by 晴 on 2017/1/7.
 */
public class LuceneIndexHelperSupport<T> implements LuceneIndexHelper<T> {

    private Analyzer analyzer;

    private Directory directory;

    private String path;


    public LuceneIndexHelperSupport() {
        this("lucene_local_repository");
    }

    public LuceneIndexHelperSupport(String path) {
        this(path, new StandardAnalyzer());
    }

    public LuceneIndexHelperSupport(String path, Analyzer analyzer) {
        this.path = path;
        this.analyzer = analyzer;
        this.directory = LuceneUtils.getDirectory(path);
    }


    @Override
    public void add(T t, float boost) {
        Document doc = LuceneUtils.toDoc(t, boost);
        IndexWriter indexWriter = LuceneUtils.getIndexWriter(path, analyzer);
        LuceneUtils.addDocumentBeforeClose(indexWriter, doc);
    }

    @Override
    public void modify(T t, float boost) {
        String value = MyReflectUtils.fieldValue(t, "id");
        Document doc = LuceneUtils.toDoc(t, boost);
        IndexWriter indexWriter = LuceneUtils.getIndexWriter(path, analyzer);
        LuceneUtils.updateDocumentBeforeClose(indexWriter, new Term("id", value), doc);
    }

    @Override
    public void delete(String id) {
        IndexWriter indexWriter = LuceneUtils.getIndexWriter(path, analyzer);
        LuceneUtils.deleteDocumentBeforeClose(indexWriter, new Term("id", id));
    }

    @Override
    public List<T> queryByKeyword(String keyword, T t, int n) {
        String[] fields = MyReflectUtils.getFields(t.getClass());
        Query query = LuceneUtils.getMultiFieldQuery(Version.LUCENE_6_3_0, fields, this.analyzer, keyword);
        IndexReader indexReader = LuceneUtils.getIndexReader(directory);
        IndexSearcher indexSearcher = new IndexSearcher(indexReader);
        List<Object> list = LuceneUtils.search(indexSearcher, query, this.analyzer, n, t);
        return transfer(list);
    }

    @Override
    public List<T> queryAll(T t, int i) {
        Query query = new MatchAllDocsQuery();
        IndexReader indexReader = LuceneUtils.getIndexReader(directory);
        IndexSearcher indexSearcher = new IndexSearcher(indexReader);
        List<Object> objects = LuceneUtils.search(indexSearcher, query, this.analyzer, i, t);
        return transfer(objects);
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

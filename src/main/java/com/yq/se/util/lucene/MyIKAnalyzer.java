package com.yq.se.util.lucene;

import org.apache.lucene.analysis.Analyzer;

public    class MyIKAnalyzer extends Analyzer {

    private boolean useSmart;

    public boolean useSmart() {
        return this.useSmart;
    }

    public void setUseSmart(boolean useSmart) {
        this.useSmart = useSmart;
    }

    public MyIKAnalyzer() {
        this(false);
    }

    @Override
    protected TokenStreamComponents createComponents(String s) {

        MyIKTokenizer tokenizer = new MyIKTokenizer(this.useSmart);
        return new TokenStreamComponents(tokenizer);
    }


    public MyIKAnalyzer(boolean useSmart) {
        this.useSmart = useSmart;
    }

    /*protected TokenStreamComponents createComponents(String fieldName, Reader in) {
        IKTokenizer _IKTokenizer = new IKTokenizer(in, this.useSmart());
        return new TokenStreamComponents(_IKTokenizer);
    }*/


}
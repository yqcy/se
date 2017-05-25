package com.yq.se.util.mybatis;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class MybatisUtils {
	private static SqlSessionFactory sqlSessionFactory;
	static {
		InputStream is = null;
		try {
			is = Resources.getResourceAsStream("mybatis-config.xml");
			sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 拿到没有经过ThreadLocal包装的原始SqlSession
	 * <p>
	 * 这个SqlSession是不安全的
	 * 
	 * @return SqlSession
	 */
	public static SqlSession openSession() {
		return sqlSessionFactory.openSession();
	}

	// 定义ThreadLocal对象
	private static ThreadLocal<SqlSession> tl = new ThreadLocal<SqlSession>();

	/**
	 * 拿到经过ThreadLocal包装的SqlSession
	 * <p>
	 * 这个SqlSession是当前线程唯一的
	 * 
	 * @return SqlSession
	 */
	public static SqlSession getConcurrentSession() {
		SqlSession sqlSession = tl.get();
		if (sqlSession == null) {
			sqlSession = openSession();
			tl.set(sqlSession);
		}
		return sqlSession;
	}

	public static <T> T getDaoMapper(Class<T> cla) {
		return getConcurrentSession().getMapper(cla);
	}

	/**
	 * 提交事务并关闭连接
	 * <p>
	 * 这个方法不再提供自动关闭sqlSession的方法
	 */
	public static void commit() {
		SqlSession sqlSession = getConcurrentSession();
		sqlSession.commit();
	}

	/**
	 * 回滚事务并关闭连接
	 * <p>
	 * 这个方法不再提供自动关闭sqlSession的方法
	 */
	public static void rollback() {
		SqlSession sqlSession = getConcurrentSession();
		sqlSession.rollback();
	}

	/**
	 * 关闭连接
	 * <p>
	 * 必须手动关闭
	 */
	public static void close() {
		SqlSession sqlSession = getConcurrentSession();
		if (sqlSession != null) {
			sqlSession.close();
			tl.remove();
		}
	}
	/**
	 * 获得数据库中的字段值<p>
	 * createDate->create_date
	 * @param fieldName
	 * @return
	 */
	public static String transferToDatabaseName(String fieldName){
			StringBuilder sb = new StringBuilder();
			char[] cs = fieldName.toCharArray();
			for (char c : cs) {
				if (Character.isUpperCase(c)) {
					char lowerCase = Character.toLowerCase(c);
					sb.append("_");
					sb.append(lowerCase);
				}else{
					sb.append(c);
				}
			}
			return sb.toString();
	}
}

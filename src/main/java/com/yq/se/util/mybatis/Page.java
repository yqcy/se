package com.yq.se.util.mybatis;

import org.springframework.stereotype.Component;

@Component
public class Page {
	/***********************************************************************************
	 * 属性
	 ***********************************************************************************/
	private Integer begin;//数据开始的下标
	private Integer end;//数据结束的下标
	private Integer size;//每页显示的条数
	private Integer count;//总条数
	private Integer [] pages;//总页数
	private Integer index;//当前的页数
	private String sort;//要进行排序的字段
	private String order;//进行排序的规则，默认asc
	/***********************************************************************************
	 * get/set方法
	 ************************************************************************************/
	public Integer getBegin() {
		if(index>0)begin = (index-1)*size;
		return begin;
	}
	public void setBegin(Integer begin) {
		this.begin = begin;
	}
	public Integer getEnd() {
		end = index*size;
		return end;
	}
	public void setEnd(Integer end) {
		this.end = end;
	}
	public Integer getSize(){
		return size;
	}
	public void setSize(Integer size){
		this.size = size;
	}
	public Integer[] getPages(){
		if(count % size ==0){
			pages = new Integer[count/size];
		}else{
			pages = new Integer[count/size+1];
		}
		return pages;
	}
	public Integer getIndex(){
		return this.index;
	}
	public void setIndex(Integer index){
		this.index = index;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public String getSort() {
		if(sort!=null)return MybatisUtils.transferToDatabaseName(sort);
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	/************************************************************************************
	 * 构造方法
	 ************************************************************************************/
	public Page(){
		this(1 , 1 , 1  , null , "asc");
	}
	
	public Page(Integer index){
		this(index , 5 , 5 , null , "asc");
	}
	public Page(Integer index , Integer count){
		this(index , 5 , count , null , "asc");
	}
	public Page(Integer index , Integer size ,  Integer count){
		this(index , size , count , null , "asc");
	}
	/**
	 * 
	 * @param index 当前的页号
	 * @param size 每页显示的条数
	 * @param count 数据库中的总条数
	 * @param sort 排序的字段(列名),默认为null
	 * @param order 排序的规则,默认ASC升序
	 */
	public Page(Integer index , Integer size , Integer count , String sort , String order){
		this.index = index;
		this.size = size;
		this.count = count;
		this.sort = sort;
		this.order = order;
	}
	
	/**************************************************************************************
	 * 功能方法
	 **************************************************************************************/
	/**
	 * 判断是否有上一页
	 * @return	有则返回true，没有则返回false
	 */
	public boolean getHasPrevious(){
		return index > 1;
	}
	/**
	 * 判断是否有下一页
	 * @return	有则返回true，没有则返回false
	 */
	public boolean getHasNext(){
		return (count % size == 0 ) ? index < (count / size) : index < (count / size + 1);
	}
	
	
}

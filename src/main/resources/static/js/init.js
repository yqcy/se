//类的全限定名长度超过一定时格式化
function classNameFormatter(value, row, index) {
	if(value.length > 53) {
		var begin = value.substr(0, 26);
		var end = value.substr(value.length - 26);
		return begin + "......" + end;
	} else {
		return value;
	}
}
//异常信息描述长度超过一定时进行格式化
function exceptionFormatter(value, row, index) {
	if(value.length > 22) {
		var str = value.substr(0, 22);
		return str + "......";
	} else {
		return value;
	}
}
//异常解决方案超过一定时进行格式
function solutionFormatter(value, row, index) {
	if(value.length > 22) {
		var str = value.substr(0, 22);
		return str + "......";
	} else {
		return value;
	}
}

function statusFormatter(value, row, index) {
	if(value == 0) {
		return "审核";
	} else if(value == 1) {
		return "通过";
	} else {
		return "异常";
	}
}

function userFormatter(value, row, index) {
	return value.nickname;
}

//点击查看异常解决方案
function btnClick(id) {
	console.info("点击了" + id);
	$("#dledit").dialog({
		title: '查看异常详情',
		width: 845,
		height: 400
	});
}

//格式化"查看异常解决方案的按钮"
function btnFormatter(value, row, index) {
	return "<a href='javascript:void(0)' class='btn' onClick=btnClick('" + row.id + "')><font color=green ><strong>查看异常详情</stong></font></a>";
}

function loadSuccess(data) {
	$(".btn").linkbutton({
		plain: true,
		width: 120,
		height: 23
	});
}
//初始化dialog窗口为了添加新的异常
function add() {
	$("#dl").dialog({
		title: '添加新的异常',
		width: 850,
		height: 550,
		modal: true,
		resizable: true,
		buttons: '#btns'
	});
}
//表单提交
function submit() {
	$.messager.confirm('确认', '您确认提交吗？', function(r) {
		if(r) {
			$.messager.progress(); //开启进度条
			$("#f").form('submit', {
				url: 'http://localhost:8080/baizhi66_exception_system/',
				onSubmit: function() {
					//进行表单的验证,失败不进行表单的提交

				},
				success: function(data) {
					if(data == 'success') {
						$.messager.show({
							title: '提交信息',
							msg: '提交成功！',
							timeout: 2000,
							showType: 'fade'
						});

					} else if(data == 'false') {
						$.messager.show({
							title: '提交信息',
							msg: '提交失败......',
							timeout: 2000,
							showType: 'fade'
						});
					} else {
						$.messager.show({
							title: '警告',
							msg: '提交异常，请稍候重试！',
							timeout: 2000,
							showType: 'fade'
						});
					}
					$.messager.progress('close');
					$("#dl").dialog('close', true);
				}
			});
		} else {
			$.messager.progress('close');
			return r;
		}
	});

}
//重置表单
function reset() {
	$("#f").form('reset');
}
//添加tab页
function addTab(title, src) {
	var tab = $('#tt').tabs('getTab', title);
	if(tab == null) {
		var iframe = '<iframe src="' + src + '" width="98%" height="98%"  scrolling="no"></iframe>';
		$('#tt').tabs('add', {
			'title': title,
			content: iframe,
			closable: true,
		});
	} else {
		$('#tt').tabs('select', title);
	}

}
/*
 * 多条件进行查询用户
 */
function userSearch(data) {
	console.info(data);
	var beginTime = $('#beginTime').datebox('getValue');
	var endTime = $('#endTime').datebox('getValue');
	var status = $('#status').combobox('getValue');
	$('#ut').datagrid('reload', {
		beginTime: beginTime,
		endTime: endTime,
		status: status
	});
}
/*
 * 多条件查询异常
 */
function exceptionSearch() {
	//获得开始时间
	var beginTime = $('#beginTime').datebox('getValue');
	//获得结束时间
	var endTime = $('#endTime').datebox('getValue');
	//获得提供者
	var provider = $('#provider').combobox('getValue');
	//获得异常名
	var exceptionName = $('#exception').textbox('getValue');
	//获得解决状态
	var status = $('#status_exception').combobox('getValue');
	$('#dg_exception').datagrid('load',{
		'fullClassName':exceptionName,
		'status':status,
		'userId':provider,
		'beginTime':beginTime,
		'endTime':endTime
	});
}
/*
 * 比较两次密码是否一致
 */
function comparedPassword() {
	var p1 = $('#passwordsignup');
	var p2 = $('#passwordsignup_confirm');
	if(p1.val().length < 6 || p2.val().length < 6) {
		p1.val('');
		p2.val('');
		p1.attr('placeholder', '请重新输入密码!');
		p2.attr('placeholder', '密码长度不能小于6位!');
		return false;
	}
	if(p1.val() != p2.val()) {
		p1.val('');
		p2.val('');
		p1.attr('placeholder', '请重新输入密码!');
		p2.attr('placeholder', '两次输入密码不一致!');
		return false;
	}
	return true;
}
/*
 * 检查注册信息是否正确
 */
function checkRegister() {
	if(comparedPassword()) {
		var url = 'http://localhost:8989/user/check/username';
		var username = $('#username_register').val();
		$.get(url, {
			'username': username
		}, function(data) {
			console.log(data);
			if(data) {
				$('#form_register').submit();
			} else {
				$('#username_register').val('');
				$('#username_register').attr('placeholder', '该邮箱已经被注册,请选择其它或找回!');
			}
		}, 'json');
	}
}
/*
 * 从search.html跳转到show.html页面，中间携带参数
 */
function skipToShow() {
	var str = $('#search_text').val();
	window.location.href = "http://localhost:8989/pages/show.html?search=" + str;
}
/*
 * 在show.html页面点击搜索
 */
function clickShow() {
	var str = $('#show_text').val();
	//这里目前是假数据，需要改成成态获取分页点击
	var index = 1;
	$.get("http://localhost:8989/exception/search?str=" + str+"&index="+index,
		function(data) {
			//填充左侧的异常div
			var rows = data.rows;
			var total = data.total;
			$.each(rows, function(i, n) {
				var num = i + 1;
				$('#show'+num).show();
				$('#title'+num).html(n.fullClassName);
				$('#desc'+num).html(n.description);
				$('#user'+num).html(n.user.nickname);
				$('#time'+num).html(n.user.createDate);
			});
			paging(index,5,rows.length);
		}
	);
}
//超链接点击执行的事件
function linkClickShow(a) {
	var str = $('#show_text').val();
	var text = a.text;
	console.log(text);
	//这里目前是假数据，需要改成成态获取分页点击
	var index = a.id.slice(1);
	console.log(index);
	$.get("http://localhost:8989/exception/search?str=" + str+"&index="+index,
		function(data) {
			//填充左侧的异常div
			var rows = data.rows;
			var total = data.total;
			$.each(rows, function(i, n) {
				var num = i + 1;
				$('#show'+num).show();
				$('#title'+num).html(n.fullClassName);
				$('#desc'+num).html(n.description);
				$('#user'+num).html(n.user.nickname);
				$('#time'+num).html(n.user.createDate);
			});
			paging(index,5,rows.length);
		}
	);
}
//分页
//page页号
//size每页的条数
//total总条数
function paging(page,size,total){
	if(page == 1){
//		$('#previous_page').attr('style','text-decoration:none;color:black;');
		$('#previous_page').removeAttr('href');
		$('#previous_page').removeAttr('onClick');
	}
	//当前的页号
	var nowPage = page;
	//前3页的页号
	var previousPage = nowPage - 3 ;
	//后3页的页号
	var nextPage = nowPage + 3 ;
	//计算总页数
	var totalPage = 0;
	if(total%size==0){
		totalPage = total / size;
	}else{
		totalPage = total / size + 1;
	}
	if(totalPage == page){
//		$('#final_page').attr('style','text-decoration:none;color:black;');
		$('#final_page').removeAttr('href');
		$('#final_page').removeAttr('onClick');
	}
	//计算需要显示的页号
	var beginPage = 0;
	var endPage = 0;
	if(previousPage <= 0){
		beginPage = 1;
	}else{
		beginPage = previousPage;
	}
	if(nextPage > totalPage){
		endPage = totalPage;
	}else{
		endPage = nextPage;
	}
	for (var i = beginPage; i <= endPage; i++) {
		var num = i % 7;
		if(num == 0){
			num = 7;
		}
		//当前页高亮显示
		var linkA = $('#a'+num);
		linkA.show();
		linkA.html(beginPage);
		linkA.attr('onClick','linkClickShow(this)');
		if(beginPage == page){
//			linkA.attr('href','javascript:void(0);');
			linkA.attr('style','text-decoration:none;color:black;');
			linkA.removeAttr('href');
			linkA.removeAttr('onClick');
		}
	}
}

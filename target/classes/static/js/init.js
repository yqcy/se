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
		return "未解决";
	} else if(value == 1) {
		return "已解决";
	} else {
		return "未知";
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
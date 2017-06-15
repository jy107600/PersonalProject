window.onload = function() {
	var userid = document.getElementById("userid");
	var role = document.getElementById("role");
	var depart = document.getElementById("department");
	 var teacherManage = document.getElementById("teacherManage");
	$.ajax({
		type : "post",
		url : "getCurrentUser",  
		contentType : "application/x-www-form-urlencoded",
		dataType : "text", // 返回的数据格式
		success : function(data) {
			var user = data.split(",");  //get的是一个字符串，封装了登陆用户的信息，进行切割
			userid.innerHTML = user[0];    // 向标签中写入值
			role.innerHTML = user[1];
			if ((user[1] == "指导员") || (user[1] == "辅导员")) {  //根据角色显示菜单
		        teacherManage.style.display = "none";
		    }
			depart.innerHTML = user[2];
		}
	})
}
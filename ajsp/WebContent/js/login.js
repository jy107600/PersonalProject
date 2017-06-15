function Login() {
	var userid = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if(userid == "" || userid.length ==0){
		alert("请输入账号");
	}
	if(password == "" || password.length ==0){
		alert("请输入密码");
	}
	else{
	$.ajax({
		type : "post",
		url : "Login",
		contentType : "application/x-www-form-urlencoded",
		data :{"userid":userid,"password":password} , //　Json串或字符串等，传给后台的数据,特别需要注意这里，需要现将json数组通过JSON.stringify()处理一下之后，才能作为我们需要的参数传过去
		dataType : "text", // 返回的数据格式
		success : function(data) {
			// 回调函数,将数据打印到页面
//			alert(data);
			window.location.href = "./main.html";   //js实现转发
		},
		error : function(data){
			alert("服务器错误");
		}
	})
	}
}
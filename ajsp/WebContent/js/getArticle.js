window.onload = function getArticle(){
	var list = document.getElementById('articleList');
	$.ajax({
		type : "post",
		url : "showArticle",
		contentType : "application/x-www-form-urlencoded",
		data :{"num":7} , //　传递的文章数量，首页为7篇
		dataType : "json", // 返回的数据格式
		success : function(data) {
			var code = '';
			for(var i= 0;i < data.length;i++){
      		obj = eval(data[i]);//转换后的json对象
//			alert(obj.date);//json name
			code += '<li><a href="./showArticleContent.html">'+obj.title+'</a><span>【'+obj.date+'】</span></li>';
			list.innerHTML = code;
			}
		}
	})

}
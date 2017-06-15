$(function(){    //获取frame子页面的高度填充父页面,完成frame的完整填充
var height=$(document).height();
	$('#iframepage', parent.document).css("height",height);
}); 
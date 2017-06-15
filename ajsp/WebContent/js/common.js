(function(win,$){    //实现点击效果
	$(function(){
		$("#main-nav a").click(function(){
			$("#main-nav a").each(function(){
				$(this).parent().removeClass("active");
			})
			$(this).parent().addClass("active");
		});

	});

	$.extend(win,{
	});
}(this,jQuery));

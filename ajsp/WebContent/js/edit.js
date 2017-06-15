/**
 * 编辑通用方法
 */
function edit(obj){
	
	//取编辑行的值
	var info = new Array();  //数组保存要编辑的值
	var edittd=$(obj).parent().parent().find("td");

	for(var i=0;i<edittd.length-1;i++){
		var textvalue=edittd.eq(i).html();
		info.push(textvalue);  //放入数组
	}
	
	//输入框激活
	var index=0;
	$(".editshow td").each(function(){
		// $(this).children().removeAttr("disabled");
		//编辑框赋值
		if(!$(this).children().is("select")){
			$(this).children().val(info[index]);  //普通输入框
		}else{
			//下拉列表
			$(this).children().find("option").each(function(){
				if($(this).text()==info[index]){
					$(this).attr("selected",true);
				}
			});
		}
		index++;
	});


}
define('shops',['jquery','conf','getDatas'],function($,conf,g){
	return {
		listShop:function(url,fn){
			$.ajax({
				type:"get",
				dataType:"text",
				url:url,
				success:function(data){
					var data=JSON.parse(data);
					fn(data);
				}
			});
		},
	}	
})
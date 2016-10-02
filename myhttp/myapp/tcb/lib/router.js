define("router",['backbone','conf','shops',"getDatas","jquery"],function(b,conf,shop,getDatas){
	var router=Backbone.Router.extend({
		routes:{
			"getshopdata/:m/:count":"getdata",
		},
		getdata:function (){
			var url = conf.shopUrl+"shops/pages/1";
			shop.listShop(url,getDatas.getDD);//创建列表			
		}
	});
	return new router();
})
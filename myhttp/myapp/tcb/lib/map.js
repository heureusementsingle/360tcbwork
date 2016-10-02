define("map",[],function(){
	var map=document.getElementById('map');//地图模式
	var model_bg=document.getElementsByClassName('model-bg')[0];//地图模态化窗口
	var map_div=document.getElementsByClassName('map-div')[0];//地图
	var cancel=document.getElementById('cancel');//关闭地图按钮
	map.onclick=function(e){
		model_bg.style.display='block';
		map_div.style.display='block';
		e.preventDefault();
	}
	//关闭地图
	cancel.onclick=function(){
		model_bg.style.display='none';
		map_div.style.display='none';
	}
	var map_infor=document.getElementById('map-infor');
	return{
		newMap:function (arr,info){
			var marker=[];
		    var map = new AMap.Map(map_infor, {
		    	center:[116.39,39.9],
		        zoom: 10
		    });
		    AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.Geolocation','AMap.OverView'],
			    function(){
		            map.addControl(new AMap.ToolBar());
		            map.addControl(new AMap.Scale());
		            map.addControl(new AMap.Geolocation());
		            map.addControl(new AMap.OverView({isOpen:true}));
			});
		    for(var e=0;e<arr.length;e++){
		    	(function(d){
		    		marker=new AMap.Marker({
					position:arr[d],
					map:map,
					})
				   var infoWindow = new AMap.InfoWindow({
				   		content:'<h2 style="font-size:16px;color:#888;">'+info[d].shop_name+'</h2>'+"<div style='font-size:14px;'>主营："+info[d].main+"</div>"+"<div style='font-size:14px;'>地址："+info[d].addr+"</div>",
				   		offset: new AMap.Pixel(0,-30),
				   });
				    AMap.event.addListener(marker,"click",function(){
				  	 infoWindow.open(map,this.getPosition());
				    })
		    	}(e))  
			}	 
		}
	}
})
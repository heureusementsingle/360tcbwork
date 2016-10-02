define(function(){
	return {
		goTop:function(){
			//回顶部
			var returnTop=document.getElementsByClassName("goTop")[0];
			console.log(returnTop);
			window.onscroll = function(){
				var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
				if(scrollTop > 100){
					returnTop.style.display = "block";
				}else{
					returnTop.style.display = "none";
				}
			}
			returnTop.onclick = function(){
				document.body.scrollTop=0;
				document.documentElement.scrollTop=0;
			}
		}
	}
});
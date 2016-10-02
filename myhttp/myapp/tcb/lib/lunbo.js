define(function(){
	var bottom_cate=document.getElementsByClassName('bottom-cate')[0];//轮播图
	var cate_circle=document.getElementsByClassName('cate-circle');//圆点
	return {
		play:function(){
			var i=0;
			function bottomPicChange(){//轮播
				if (i<5) {
					bottom_cate.src='images/'+(i+1)+'.jpg';
					cate_circle[i].style.background='black';
					for(var j=0;j<cate_circle.length;j++){
						if (j!=i) {
							cate_circle[j].style.background='#eee';
						}
					}
					i++;
				}else{
					i=0;
				}
			}
			var interval=setInterval(bottomPicChange,1000);
			for(var k=0;k<cate_circle.length;k++){    			//圆点切换
				cate_circle[k].index=k;
				cate_circle[k].addEventListener('click',function(){
					clearInterval(interval);
					bottom_cate.src='images/'+(this.index+1)+'.jpg';
					this.style.background='black';
					for(var j=0;j<cate_circle.length;j++){
						if (j!=this.index) {
							cate_circle[j].style.background='#eee';
						}
					}
					i=this.index;
				});
				cate_circle[k].onmouseenter=function(){//进入园点，图片切换
					clearInterval(interval);
					this.style.background='black';
					bottom_cate.src='images/'+(this.index+1)+'.jpg';
					for(var j=0;j<cate_circle.length;j++){
						if (j!=this.index) {
							cate_circle[j].style.background='#eee';
						}
					}
				}
				cate_circle[k].addEventListener('mouseleave',function(){//离开继续轮播
					interval=setInterval(bottomPicChange,1000);
				});
			}
		}
	}
})
define('menu',function(){
	return {
		display:function(){
			var item=document.getElementsByClassName('item');//一级菜单
			var xsj_item=document.getElementsByClassName('xsj-item');//二级菜单
			for(var j=0;j<item.length;j++){//二级菜单事件
				item[j].onmouseenter=(function(l){
					return function(){
						this.style.background='#185';
						xsj_item[l].style.display='block';
					}
				}(j));
				item[j].onmouseleave=(function(l){
					return function(){
						this.style.background='rgba(0,0,0,0.8)';
						xsj_item[l].style.display='none';
					}
				})(j);
			}
			for(var k=0;k<xsj_item.length;k++){
				xsj_item[k].onmouseenter=function(){
					this.style.display='block';
				}
				xsj_item[k].onmouseleave=function(){
					this.style.display='none';
				}
			}
		}
	}
})

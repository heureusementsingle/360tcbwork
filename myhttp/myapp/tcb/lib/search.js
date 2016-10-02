define("search",[],function(){
	var body=document.getElementsByTagName('body')[0];
	var search_inner=document.getElementsByClassName('search-inner')[0];
	var search_information=document.getElementsByClassName('search-information')[0];
	return {
		search:function(){//搜索框事件
			search_inner.oninput=function(e){
				var innerText=this.value;
				if (innerText=='') {
					search_information.style.display='none';
					search_information.innerHTML='';
				}
				var script0=document.createElement('script');
				body.appendChild(script0);
				script0.src="http://suggest.bang.360.cn/suggest?word="+innerText+"&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852";
				search_information.style.display='block';
			}
			window.suggest=function(data){//回调函数
				search_information.style.display='block';
				if (data.result) {
					for(var s=0;s<data.result.length;s++){
						var p=document.createElement('p');
						p.className='inner-input';
						p.innerHTML=data.result[s].word;
						p.style.fontSize='14px';
						search_information.appendChild(p);
						p.onclick=function(){
							search_inner.value=this.innerHTML;
							search_information.style.display='none';
						}
					}
				}else{
					search_information.innerHTML="没有此内容";
				}
				setTimeout(function(){//提示信息 10s消失
					search_information.style.display='none';
				},10000);
			}
		}
	}
})
define('getDatas',['jquery',"map"],function($,map){
	var shop_left=document.getElementsByClassName('shop-left')[0];//商家列表容器
	var shop_left_item=document.getElementsByClassName('shop-left-item')[0];//商家列表
	var next_page=document.getElementsByClassName('next-page')[0];//下一页
	var data,arr=[],info = [];
	function createElement(data){//创建元素
		arr.push([parseFloat(data.map_longitude),parseFloat(data.map_latitude)]);
		info.push({"shop_name":data.shop_name,"main":data.main,"addr":data.addr});
		var product_item=document.createElement('div');
		product_item.className='product-item';
		shop_left_item.appendChild(product_item);
		var pro_img=document.createElement('div');
		pro_img.className='pro-img';
		product_item.appendChild(pro_img);
		var img=document.createElement('img');//图片
		img.className='product-img';
		img.src=data.shop_ico;
		pro_img.appendChild(img);
		var pro_infor=document.createElement('div');
		pro_infor.className='pro-infor';
		product_item.appendChild(pro_infor);
		var shop_product_infor=document.createElement('div');
		shop_product_infor.className='shop-product-infor';
		pro_infor.appendChild(shop_product_infor);
		var h3=document.createElement('h3');
		shop_product_infor.appendChild(h3);
		var a_href=document.createElement('a');//店名
		a_href.innerHTML=data.shop_name;
		h3.appendChild(a_href);
		var spdj=document.createElement('div');
		spdj.innerHTML='店铺等级：';
		spdj.className='spdj';
		shop_product_infor.appendChild(spdj);
		var another_a=document.createElement('a');
		another_a.className='heart-container';
		spdj.appendChild(another_a);
		var score=Number(data.shop_score);
		for(var i=0;i<score;i++){
			var red_heart=document.createElement('span');
			red_heart.className='red-heart' //创建等级的红心
			another_a.appendChild(red_heart);
		}
		var the_item=document.createElement('div');
		the_item.className='the-main';
		the_item.innerHTML='主营：'+data.main;//主营的内容
		pro_infor.appendChild(the_item);
		var shop_address=document.createElement('div');
		shop_address.className='shop-address';
		shop_address.innerHTML="地址: "+data.addr;//店铺的地址
		pro_infor.appendChild(shop_address);
		var pro_guarantee=document.createElement('div');
		pro_guarantee.className='pro-guarantee';
		product_item.appendChild(pro_guarantee);
		var pay=document.createElement('div');//先行赔付
		pay.className='pay';
		pro_guarantee.appendChild(pay);
		var span1=document.createElement('span');
		span1.innerHTML='先行赔付';
		pay.appendChild(span1);
		var tc_sure=document.createElement('div');
		tc_sure.className='tc-sure';
		var span2=document.createElement('span');
		span2.innerHTML='同城帮认证';
		tc_sure.appendChild(span2);
		pro_guarantee.appendChild(tc_sure);
		var rq=document.createElement('div');
		rq.className='rq';
		rq.innerHTML='人气：'+data.shop_visit+'浏览';
		pro_guarantee.appendChild(rq);
		var span3=document.createElement('span');
		span3.className='enter-shop';
		span3.innerHTML='进入店铺';
		product_item.appendChild(span3);
	}
	//换页
	function color(f){
		if (f>1) {
			for(var j=0;j<$('.first-page').length;j++){
				document.getElementsByClassName('first-page')[j].style.display='block';
			}
		}
		var page=document.getElementsByClassName('page-number');
		if (f==0) {
			for(var c=0;c<page.length;c++){
				if (page[c].index==1) {
					page[c].style.background="#FC6621";
					page[c].style.color='white';
					page[c].style.border='1pxs solid #FC6621';
					page[c].style.fontWeight=700;
				}else {
					page[c].style.background='white';
					page[c].style.color='#000';
					page[c].style.border='1px solid #D6D6D6';
					page[c].style.fontWeight="normal";
				}
			}
		}else{
			for(var c=0;c<page.length;c++){
				if (f!=page[c].index) {
					page[c].style.background='white';
					page[c].style.color='#000';
					page[c].style.border='1px solid #D6D6D6';
					page[c].style.fontWeight="normal";
				}else {
					page[c].style.background="#FC6621";
					page[c].style.color='white';
					page[c].style.border='1pxs solid #FC6621';
					page[c].style.fontWeight=700;
				}
			}
		}
		o=f;
	}
	function charge(x,data){
		if (x==1||x==0) {
			arr=[];
			info=[];
			shop_left_item.innerHTML='';
			for(var m=0;m<5;m++){
				createElement(data[m]);
			}
		}else if (x>1) {
			arr=[];
			info=[];
			shop_left_item.innerHTML='';
			for(var m=(x-1)*5;m<x*5;m++){
				createElement(data[m]);
			}
		}
		o=x;
		map.newMap(arr,info);
	}
	return {
		getDD:function(data){//得到数据创建按钮以及map信息
			var o=1;
			data=data.shop_data;
			var records=Math.ceil(data.length/5);
			var pro_pages=document.createElement('div');
			pro_pages.className='pro-pages';
			var pages=document.createElement('div');
			pages.className='pages';
			pro_pages.appendChild(pages);
			for(var x=0;x<records+1;x++){
				var btn=document.createElement('a');
				btn.href='###';
				btn.innerHTML=x;
				btn.index=x;
				createElement(data[x]);
				arr.push([parseFloat(data[x].map_longitude),parseFloat(data[x].map_latitude)]);
				info.push({"shop_name":data[x].shop_name,"main":data[x].main,"addr":data[x].addr});
				pages.appendChild(btn);
				if (x==0) {
					btn.className='first-page';
					btn.innerHTML='首页';
					btn.href='###';
					var a_btn0=btn.cloneNode(true);
					a_btn0.index=btn.index;
					a_btn0.addEventListener('click',function(){
						color(this.index);
						return charge(this.index,data);
					})
					$(a_btn0).appendTo('.pages-all');
					var pre_page=document.createElement('a');
					pre_page.href='###';
					pre_page.innerHTML="<<上一页";
					pre_page.className='pre-page';
					pages.appendChild(pre_page);
					var prefer=pre_page.cloneNode(true);
					$(prefer).appendTo('.pages-all');
				}else if (x==1) {
					btn.className='page-number dy-page';
				}else{
					btn.className='page-number';
				}
				if (x>10) {
					btn.style.display='none';
				}
				var a_btn=btn.cloneNode(true);
				a_btn.index=btn.index;
				a_btn.addEventListener('click',function(){
					color(this.index);
					o=this.index;
					return charge(this.index,data);
				})
				if (x>0) {
					$(".pages-all").append(a_btn);
				}
				btn.addEventListener('click',function(){
					color(this.index);
					o=this.index;
					return charge(this.index,data);
				});
			}
			var btn1=document.createElement('a');
			btn1.className='next-page';
			btn1.innerHTML='下一页>>';
			btn1.href='###';
			var dy_btn1=btn1.cloneNode(true);
			pages.appendChild(btn1);
			var btn2=document.createElement('a');
			btn2.className='last-page';
			btn2.href='###';
			btn2.innerHTML='尾页';
			btn2.index=records;
			var a_btn2=btn2.cloneNode(true);
			a_btn2.index=btn2.index;
			pages.appendChild(btn2);
			shop_left.appendChild(pro_pages);
			$(".pages-all").append(dy_btn1);
			$(a_btn2).appendTo('.pages-all');
			var next_page=document.getElementsByClassName('next-page');
			var flag=false;
			//下一页
			for(var t=0;t<next_page.length;t++){
				next_page[t].addEventListener('click',function(){
					if (o<records) {
						for(var k=0;k<$('.last-page').length;k++){
							document.getElementsByClassName('last-page')[k].style.display="block";
						}
						o=o+1;	
						charge(o,data);
						color(o);		
					}else{
						o=0;
					}
				})
			}
			//上一页
			var pre=$('.pre-page');
			var f=false;
			for(var t=0;t<pre.length;t++){
				pre[t].addEventListener('click',function(){
					if (o<1){
						o=records+1;
					}
					o=o-1;
					charge(o,data);
					color(o);
				})
			}
			var last=document.getElementsByClassName('last-page');
			for(var n=0;n<last.length;n++){
				last[n].addEventListener('click',function(){
					charge(this.index,data);
					color(this.index);
					console.log(this.index);
				})
			}
			map.newMap(arr,info);//地图
		}
	}
})
$(function(){
				function render(obj){
					
					var tpl = '<li>\
					<img src="'+obj.shop_ico+'"/>\
					<div class="content_1">\
						<h4>'+obj.shop_name+'<span>店铺等级:</span>'+obj.level+'</h4>\
						<p>'+obj.main+'</p>\
						<p>'+obj.addr+'</p>\
					</div>\
					<div class="content_2">\
						<p><span></span>先行赔付</p>\
						<p><span></span>同城帮认证</p>\
						<p>人气:'+obj.count+'次浏览</p>\
					</div>\
					<button><a href="http://localhost:3000/shop">进入店铺</a></button>\
					</li>';

					return tpl;
				}	

				function getData(){
					$.get('/repair/shoplist',function(res){
						if(typeof res === "string"){
							res = JSON.parse(res);
						}
						var html = [];
						for (var i = 0,len = res.shop_data.length ; i < len; i++) {
							html.push(render(res.shop_data[i]))
						};
						$('#list').html(html.join(""))						
					})
				}

				getData();

				function render2(obj){
					
					var tpl = '<li>\
						<figure>\
						<img src="'+obj.shop_ico+'"/>\
						<h4>'+obj.shop_name+'</h4>\
						<p>'+obj.comments+'条评论</p>\
						</figure>\
					</li>';

					return tpl;
				}

				function getData2(){
					$.get('/repair/shoplist',function(res){
						if(typeof res === "string"){
							res = JSON.parse(res);
						}
						var html1 = [];
						for (var i = 0,len = res.shop_data.length ; i < len; i++) {
							html1.push(render2(res.shop_data[i]))
						};
						// $('#list').html(html.join(""))						
					
						var temp;
						for(var i=0;i<html1.length;i++)
						{
							//console.log(res.shop_data[i].grade)
							for(j=0;j<html1.length-i-1;j++)
							{
								 if(res.shop_data[j].grade < res.shop_data[j+1].grade){
								 temp=html1[j];
								 html1[j]=html1[j+1];
								 html1[j+1]=temp;
								}
							}
						}
						// var html2 = html1.reverse()
						$('#list2').html(html1.join(""))
						})
					}

					getData2();
			})
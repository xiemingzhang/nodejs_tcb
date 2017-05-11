$(function(){

    function render(obj){
                    
                    var tpl = '<li><figure>\
                    <img src="'+obj.product_img+'" alt="" />\
                    <p>'+obj.product_name+'</p>\
                    <p>服务内容  : '+obj.service_desc1+'</p>\
                    </figure>\
                    <p class="p">￥'+obj.product_price+'</p>\
                    <button><a href="http://localhost:3000/order">立即购买</a></button>\
                    </li>'

                    return tpl;
                }   

                function getData(){
                    $.get('/shop/shoplist',function(res){
                        if(typeof res === "string"){
                            res = JSON.parse(res);
                        }
                        var html = [];
                        for (var i = 0,len = res.product.length ; i < len; i++) {
                            html.push(render(res.product[i]))
                        };
                        $('#list').html(html.join(""))                      
                    })
                }

                getData();


	 //1.添加地图面板
    var map = new AMap.Map('container');
    map.setZoom(10);
    map.setCenter([116.49,40]);

    //2.添加点
    var marker = new AMap.Marker({
        position: [116.480983, 39.989628],
        map:map
    });

    //3.给点添加一个提示-》信息窗体
    var infowindow = new AMap.InfoWindow({
        content: '<h3>高德地图</h1><div>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
        offset: new AMap.Pixel(0, -30),
        size:new AMap.Size(230,0)
    })

    //事件绑定
    var clickHandle = AMap.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker.getPosition())
    })
})
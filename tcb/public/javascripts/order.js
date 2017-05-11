$(function(){
      // function getData(){
      //               $.get('/shop/shoplist',function(res){
      //                   if(typeof res === "string"){
      //                       res = JSON.parse(res);
      //                   }
      //                   var html = [];
      //                   for (var i = 0,len = res.product.length ; i < len; i++) {
      //                       html.push(render(res.product[i]))
      //                   };
      //                   $('#list').html(html.join(""))                      
      //               })
      //           }

      //           getData();
                
    (function(){
        var data = 
                        {
                            id : 'xxx',
                            fee : '30',
                            number : 10,
                            serve_type : 1,
                            phone : '15999999999',
                            pay_type : 1,
                            type : 1
                        }
        $('#mybutton').click(function(e){
            // e.preventDefault();
            
            $.post('/order/sub',data,function(res){
                if(res.code == 0){
                    alert('恭喜你购买成功' + res.num)
                }else{
                    alert('服务器繁忙，请稍后重试')
                }
            })
        })
    })()
})
<<<<<<< HEAD
		
=======
		
>>>>>>> 9f8c99156d99f5758a42440e9cae09bc258972dd

$(".floor_goods_wrap_li").hover(function () {
       $(this).css({"top":"-5px",
           "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
       });
},function(){
    $(this).css({"top":"0px",
        "box-shadow":"none"
    });
})

$(".foot_bottom_r").children("span").hover(function(){
    $(this).css({"background":"#ff6700",color:"#fff"});
},function(){
    $(this).css({"background":"none",color:"#ff6700"});
})
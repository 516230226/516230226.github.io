$(function(){
  $('#fullpage').fullpage({ // fullpage  方法里面接受json对象形式
    // 是否显示项目导航
    navigation: true,
    // 滚动速度，单位为毫秒
    scrollingSpeed: 1200,
    afterLoad:function(anchorLink,index){
      if (2==index) {
          $(".skillContainer .parent").each(function(index,ele){
          let num=170 * (100-parseInt($(ele).find(".number").text()))/100;
          let ss="rect("+num+"px"+",170px,170px,0px)";
          $(ele).find(".up").css("clip",ss);
        })
      }
    }
  })

  $(".works li").each(function(index,ele){
    $(ele).css("background-image","url(images/0"+(index+1)+".jpg)");
  })

})
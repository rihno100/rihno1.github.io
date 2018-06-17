$(document).ready(function(){
  $("aside ul li").on("click",function(e){
    if($(this).index() == 1){
        $(".avaliabletool,.lightboxbg").css("display","block");
        e.preventDefault()
        return false
      }else if($(this).index() == 3){
          $(".profilearea,.lightboxbg").css("display","block");
          e.preventDefault()
          return false
      }else if($(this).index() == 0){
          e.preventDefault()
          return false
      }
  })
  $(".lightboxbg").on("click",function(){
    $(this).css("display","none")
    $(".avaliabletool,.profilearea").css("display","none")
  });

  $("#navmap p").on({
    click: function(){
      const thisIndex = $(this).index();
      console.log(thisIndex)
      const onLeft = $(this).css("left");
      const onTop = $(this).css("top");
      /////초기화/////
      $("body").removeClass();
      /////실행/////
      $("#navmap .on").css({"left":onLeft,"top":onTop});
      if(thisIndex != 0 ){
        $("body").addClass("sectionarea"+thisIndex);
      }
    }
  })

});

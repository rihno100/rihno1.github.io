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
});

$(document).ready(function(){
  $("aside ul li").on("click",function(e){
    if($(this).index() == 0){
        $(".avaliabletool,.lightboxbg").css("display","block");
        e.preventDefault()
        return false
      }else if($(this).index() == 2){
          $(".profilearea,.lightboxbg").css("display","block");
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
      //console.log(thisIndex)
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
  });


  const ctaWidth = $(".careertreinarea > .items").length * $(".careertreinarea > .items").width();
  const ctaItemWidth = $(".careertreinarea > .items").width();
  const docWidth = $(document).width();



  $(window).resize(function(){
    docWidth = $(this).width();
    $(".cta-wrap").css("width",docWidth+"px");
  });


  $(".cta-wrap").css("width",docWidth+"px");

  $(".cta-wrap").on({
    mouseenter : function(e){
      $("#sectionarea1").addClass("bgon");
    },
    mouseleave : function(e){
      $("#sectionarea1").removeClass("bgon");
    },
    mousemove : function(e){
      const xDistance = e.pageX/docWidth * ctaWidth;
      const xPercent = e.pageX/docWidth *100;
      //console.log(xDistance+","+ctaWidth)
      if(xDistance < ctaItemWidth/3){
        $(this).find(".careertreinarea").css("left","0px");
      }
      if(xDistance > ctaItemWidth/3 && xDistance < ctaWidth - ctaItemWidth){
        $(this).find(".careertreinarea").css("left","-"+xDistance+"px");
      }

    }
  });

  $(".careertreinarea > .items").on({
    mouseenter : function(e){
      //console.log($(this).find(".inner h3").text())
      $(".outputarea .title").text($(this).find(".inner h3").text());
      $(".outputarea .company").html($(this).find(".inner .company").html());
      $(".outputarea .kind").html($(this).find(".inner .kind").html());
      $(".outputarea .period").html($(this).find(".inner .period").html());
      $(".outputarea .position").html($(this).find(".inner .position").html());
    }
  })


  $("aside ul li").each(function(i){
    if(i == 1){
      $(this).find("a").on({
        click : function(e){
          $("#navmap p:nth-of-type(2)").trigger("click");
          e.preventDefault;
          return false;
        }
      })
    }else if(i == 3){
      $(this).find("a").on({
        click : function(e){
          $("#navmap p:nth-of-type(3)").trigger("click");
          e.preventDefault;
          return false;
        }
      })
    }else if(i == 8){
      $(this).find("a").on({
        click : function(e){
          $("#navmap p:nth-of-type(4)").trigger("click");
          e.preventDefault;
          return false;
        }
      })
    }
  });


  $(".btn-floating.btn-large.getback").on({
    click : function(){
      $("#navmap p:nth-of-type(1)").trigger("click");
    }
  })

});

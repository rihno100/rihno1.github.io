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



/******경력섹션******/
  const ctaWidth = $(".careertreinarea > .items").length * $(".careertreinarea > .items").width();
  const ctaItemWidth = $(".careertreinarea > .items").width();
  var docWidth = $(document).width();



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

/********사이드 메뉴 맵메뉴 메칭**********/
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
  });


/*******my ordinnary *******/
  /******클릭이후 엑션******/
  var gItemLeft,gItemTop,gItemSize,gelem;
    $(".galleryitems").on({
      click : function(e){

        if($(".galleryitems").hasClass("over") != true){// default 상태 클릭
          gItemLeft = $(this).css("left");
          gItemTop = $(this).css("top");
          gItemSize = $(this).css("width");
          gelem  = $(this);

          gelem .css({"left":"50%","top":"50%","width": "500px","height": "500px"})
          gelem.addClass("over");

        }else{
          gelem.removeClass("over");
          gelem.css({"left":gItemLeft,"top":gItemTop,"width": gItemSize,"height":gItemSize})
        }
      }
    });


//var data = $(this).dataTransfer.setData("moveposition",$(this))
  //const container = document.getElementsByClassName('section-ctn')[0];
  var dragArea = document.body;
  var dragItemLength = document.getElementsByClassName('galleryitems').length;
  var dragItems = document.querySelectorAll('.galleryitems');

  for(var i=0 ; i < dragItemLength ; i++ ){
      dragItems[i].addEventListener("dragstart", dragstart);
  }
  dragArea.addEventListener("dragover", dragover);
  dragArea.addEventListener("dragleave", dragleave);
  dragArea.addEventListener("drop", drop);


  function dragstart(e) {
    //console.log($(document).width()+","+$(document).height()+",this element-size :"+e.target.parentNode.getAttribute("id"))
    //console.log(e.target.parentNode.id)
    var wdWidth = $(document).width();
    var wdHeight = $(document).height();
    var thisElem = e.target.parentNode.getAttribute("id");
    var thisElemWidth = $("#"+thisElem).width();
    var thisElemHeight = $("#"+thisElem).height();
    var thisElemOsLeft = $("#"+thisElem).offset().left;
    var thisElemOsTop = $("#"+thisElem).offset().top;
    var eCenterPointLeft = e.pageX - thisElemOsLeft;
    var eCenterPointTop = e.pageY - thisElemOsTop;

    e.dataTransfer.setData("wdWidth",wdWidth);
    e.dataTransfer.setData("wdHeight",wdHeight);
    e.dataTransfer.setData("moveelem",thisElem);
    e.dataTransfer.setData("thisElemOsLeft",thisElemOsLeft);
    e.dataTransfer.setData("thisElemOsTop",thisElemOsTop);
    e.dataTransfer.setData("thisElemWidth",thisElemWidth);
    e.dataTransfer.setData("thisElemHeight",thisElemHeight);
    e.dataTransfer.setData("eCenterPointLeft",eCenterPointLeft);
    e.dataTransfer.setData("eCenterPointTop",eCenterPointTop);

    //console.log("dragstart"+thisElem+"eW:"+thisElemWidth+",ecP:"+eCenterPointLeft+",pinter:"+e.pageX)
  }
  function dragleave(e) {
    e.preventDefault()
    console.log("dragleave")
  }
  function dragover(e) {
    e.preventDefault()
    console.log("dragover")
  }
  function dragenter(e) {
    e.preventDefault()
    console.log("dragenter")
  }
  function drop(e) {
    //this.append(box)
    var data  = e.dataTransfer.getData("moveelem");
    var thisElemWidth = e.dataTransfer.getData("thisElemWidth");
    var thisElemHeight = e.dataTransfer.getData("thisElemHeight");
    var eCenterPointLeft = e.dataTransfer.getData("eCenterPointLeft");
    var eCenterPointTop = e.dataTransfer.getData("eCenterPointTop");
    var overAreaWidth = thisElemWidth - eCenterPointLeft;
    var overAreaHeight = thisElemHeight - eCenterPointTop;

    var wdWidth = $(window).width();
    var wdHeight = $(window).height();
    var epX = e.pageX;
    var epY = e.pageY;

    var epXoaWidth = epX+overAreaWidth;
    var epYoaHeight = epY+overAreaHeight;

    var lefOrigin = epX - eCenterPointLeft;
    var topOrigin = epY - eCenterPointTop;

    var wdHthisElemHeight = wdHeight - thisElemHeight - 2;
    var wdWthisElemWidth = wdWidth - thisElemWidth - 2;


    function yMoveFunc(data,topOrigin){
        $("#"+data).css({"top": topOrigin});
    }

    function yMouveOutFunc(wdHeight,epYoaHeight,epY,data,topOrigin,wdHthisElemHeight,eCenterPointTop){
      if(wdHeight < epYoaHeight){//하단으로 벗어났을때
        $("#"+data).css({"top": wdHthisElemHeight});
      }else if(eCenterPointTop > epY){//상단으로 벗어났을때
        $("#"+data).css({"top":"0px"});
      }
    }

    if($("#"+data).hasClass("over") == false){///클릭한 확대이미지일경우 드래그이동을 하지않는다.
      if(wdWidth > epXoaWidth && eCenterPointLeft < epX){
        if(wdHeight > epYoaHeight && eCenterPointTop < epY){//상단 또는 하단으로 벗어나지 않았을때
          $("#"+data).css({"left": lefOrigin});//좌우로 벗어나지 않았을때
          yMoveFunc(data,topOrigin)
        }else{
          $("#"+data).css({"left": lefOrigin});//좌우로 벗어나지 않았을때
          yMouveOutFunc(wdHeight,epYoaHeight,epY,data,topOrigin,wdHthisElemHeight,eCenterPointTop)
        }
      }else if(wdWidth < epXoaWidth){//오른쪽영역으로 벗어날때
        if(wdHeight > epYoaHeight && eCenterPointTop < epY){//상단 또는 하단으로 벗어나지 않았을때
          $("#"+data).css({"left": wdWthisElemWidth});
          yMoveFunc(data,topOrigin)
        }else{
          $("#"+data).css({"left": wdWthisElemWidth});
          yMouveOutFunc(wdHeight,epYoaHeight,epY,data,topOrigin,wdHthisElemHeight,eCenterPointTop)
        }
      }else if(eCenterPointLeft > epX){//왼쪽영역으로 벗어날때
        if(wdHeight > epYoaHeight && eCenterPointTop < epY){//상단 또는 하단으로 벗어나지 않았을때
          $("#"+data).css({"left":"0px"});
          yMoveFunc(data,topOrigin)
        }else{
          $("#"+data).css({"left":"0px"});
          yMouveOutFunc(wdHeight,epYoaHeight,epY,data,topOrigin,wdHthisElemHeight,eCenterPointTop)
        }
      }
    }else{
      alert("확대이미지는 드래그 할 수 없습니다.")
    }
  }

  /********sorting my ordinnary thumbnail  when window resize**********/
  $(window).resize(function(){
    var wdWidth = $(this).width();
    var wdHeight = $(this).height();

    $(".galleryitems").each(function(){

      var elemSize = Math.random() * 400;
      while(elemSize < 50){
        elemSize = Math.random() * 400
      }

      var elemLeft = Math.random() * (wdWidth - 400);
      while(elemLeft < 50){
        elemLeft = Math.random() * (wdWidth - 400);
      }

      var elemTop = Math.random() * (wdHeight - 400);
      while(elemTop < 100){
        elemTop = Math.random() * (wdHeight - 400);
      }

      $(this).css({"left": elemLeft+"px","top": elemTop+"px","width": elemSize+"px","height": elemSize+"px"});
    });
  });


});

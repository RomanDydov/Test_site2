// scroll effect 
  $(function(){
      $("#navigation-menu a").mPageScroll2id({
        // offset: ".nav",
        scrollSpeed: 900,
        scrollEasing: "easeInOutExpo",
        scrollingEasing: "easeInOutCirc", // Устанавливает easing, который будет проигрываться если вызвать её уже во время изинга(кликнуть по ссылке во время прокрутки)
       
      });

    });


    document.ready=function(){
        if (sessionStorage.getItem('advertOnce') !== 'true') {
        $("#landing").append('<div><img class="popup_name" src="assets/img/Logo.svg" id="name-pop" style="transition:all .2s ease;animation: animateElementUp linear 3s;position: absolute; left: 50%; top:50%;transform: translate(-50%, -50%);z-index: 2;width: 600px;"></div><div><h1 class="touch" style="position: absolute; left:65%; top:60%;transform: translate(-50%, -50%);z-index: 2;width: 600px;color:#f7dc6f;font-size:2em;">Touch & Hold Screen</h1></div><svg id="demo" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="1900" height="1200" viewBox="0 0 100% 100%"><defs><radialGradient id="maskGradient"><stop offset="50%" stop-color="#fff" /><stop offset="100%" stop-color="#000" /></radialGradient><mask id="theMask"><circle id="masker" r="150" fill="url(#maskGradient)" cx="800" cy="450" /></mask></defs><image id="regular" xlink:href="http://leysaflores.com/wp-content/uploads/WallpaperGoldMarble_1900x1200.jpg" x="0" y="0"width="1900" height="1200" opacity="1" /><g id="maskReveal" mask="url(#theMask)"><image id="regular" xlink:href="data:https://m.blog.hu/ko/konyhabutortrend/image/modern_es_elegans_konyhasziget.jpg;base64," x="0" y="0"width="1900" height="1200" opacity="1" /></g><circle id="ring" r="20" fill="none" stroke="#dc143c" stroke-width="2" cx="800" cy="450" /><circle id="dot" r="4" fill="#dc143c" cx="800" cy="450" /></svg><div id="instructions"><svg id="dial" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"></svg></div>');
        sessionStorage.setItem('advertOnce','true');
        } else {
          return;
        }
        logo();
        // $('#advert-once .advert-button').on('click',function(){
        // $('#advert-once').hide();
        // });
          
        // $('#reset-session').on('click',function(){
        // sessionStorage.setItem('advertOnce','');
        // });
    
    
    
    var svg = document.querySelector("#demo");
    var namePop = document.getElementById("name-pop");
    var elem = document.getElementById("landing");
    var tl = new TimelineMax({onComplete:onComplete, onUpdate:onUpdate});
    var pt = svg.createSVGPoint();
    
    var data = document.querySelector(".tlProgress");
    
    
    
    
    $body = $('body');
    $body.toggleClass('overflow-hidden');
    var ratio = 0.5625;
    
    function logo() {
        if ($(window).width() < 960) {
        document.getElementById("name-pop").style.width = "500px";
        document.querySelector(".touch").style.left = "75%";
        document.querySelector(".touch").style.top = "57%";
        document.querySelector(".touch").style.fontSize = "3em";
          if ($(window).width() < 530) {
            document.getElementById("name-pop").style.width = "400px";
            document.querySelector(".touch").style.left = "80%";
            document.querySelector(".touch").style.top = "57%";
              if ($(window).width() < 430) {
              document.getElementById("name-pop").style.width = "300px";
              document.querySelector(".touch").style.left = "95%";
              document.querySelector(".touch").style.top = "57%";
            }
          }
        }
        else {
        
        }
    }
    
    
    
       
    TweenMax.set("#instructions, #dial", {xPercent: -50});
    TweenMax.set("#progressRing", {drawSVG:0});
    tl.to("#masker", .6, {attr:{r:2400}, ease:Power2.easeIn});
    tl.reversed(true);
    
        function mouseHandler() {
      tl.reversed(!tl.reversed());
    }
    
    function getPoint(evt){
      pt.x = evt.clientX; 
      pt.y = evt.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    }
    
    function mouseMove(evt) {
      var newPoint = getPoint(evt);
      TweenMax.set("#dot", {attr:{cx:newPoint.x, cy:newPoint.y}});
      TweenMax.to("#ring, #masker", 0.88, {attr:{cx:newPoint.x, cy:newPoint.y}, ease:Power2.easeOut});
     }
    
    function onUpdate() {
      var prog = (tl.progress() * 100);
      TweenMax.set("#progressRing", {drawSVG:prog + "%"});
    
      
    }
    
    function newSize() {
      var w = window.innerWidth ;
      var h = window.innerHeight;
      if (w > h * (16/9) ) {
        TweenMax.set("#demo", { attr: { width: w, height: w * ratio } });
      } else {
        TweenMax.set("#demo", { attr: { width: h / ratio, height: h } });
      }
      var data = svg.getBoundingClientRect();
      TweenMax.set("#demo", {x:w/2 - data.width/2});
      TweenMax.set("#demo", {y:h/2 - data.height/2});
    }
    
    window.addEventListener("mousedown", mouseHandler);
    window.addEventListener("mouseup", mouseHandler);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchstart", mouseHandler);
    window.addEventListener("touchend", mouseHandler);
    
    
    newSize();
    window.addEventListener("resize", newSize);
    
    
    function onComplete() {
        $body.toggleClass('overflow-visable');
        svg.removeEventListener("touchstart", mouseHandler);
        svg.removeEventListener("touchend", mouseHandler);
      svg.removeEventListener("mousedown", mouseHandler);
      svg.removeEventListener("mouseup", mouseHandler);
      svg.removeEventListener("mousemove", mouseMove);
      TweenMax.to("#regular", 0.85, {autoAlpha:1, ease:Linear.easeNone});
      TweenMax.to("#ring, #dot", 0.35, {attr:{r:0}, autoAlpha:0, ease:Linear.easeNone});
      TweenMax.set(svg, {cursor:"auto"});
      namePop.classList.add("name_pop--active");
      elem.classList.add("fade");
    
      
      
      
      
    // elem.remove();
    setTimeout(function(){ elem.remove(); },600);
    
    
    }
    };
   

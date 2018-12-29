
window.onload = function () {

  import Typed from 'typed.js';

  var options = {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 40
  };
  
  var typed = new Typed(".mongodb__heading--text", options);

var test = document.getElementById("greenSock");
   

    


  if (window.location.pathname == '/') {   
    document.getElementById("work").style.color = "#B52637";

    TweenLite.from(test, 1, { x: -1000, autoAlpha: 0 });
    TweenLite.from(test2, 1, { x: -1000, delay: .5, autoAlpha: 0 });
    TweenLite.from(test3, 1.1, { x: -1000, delay: .75, autoAlpha: 0 });
    TweenLite.from(test4, 1.2, { x: -1000, delay: 1, autoAlpha: 0 });
   
}else if(window.location.pathname == '/about'){
  document.getElementById("about").style.color = "#B52637";

  var test = document.getElementById("greenSock");
  TweenLite.from(test, 1, { autoAlpha: 0 });
 
   
     }
     else if(window.location.pathname == '/contact'){

      document.getElementById("contact").style.color = "white";
      document.getElementById("contact").style.backgroundColor = "#B52637";
      document.getElementById("contact").style.border = "#B52637";

      document.getElementById("contact2").style.color = "white";
      document.getElementById("contact2").style.backgroundColor = "#B52637";
      document.getElementById("contact2").style.borderColor = "#B52637";
      var test = document.getElementById("greenSock");
      TweenLite.from(test, 1, { autoAlpha: 0 });
   
         }
         else if(window.location.pathname == '/project'){
          var test = document.getElementById("greenSock");
          TweenLite.from(test, 1, { autoAlpha: 0 });
      
             }
             else if(window.location.pathname == '/project2'){
              var test = document.getElementById("greenSock");
              TweenLite.from(test, 1, { autoAlpha: 0 });
        
               
                 }
                 else if(window.location.pathname == '/project3'){
                  var test = document.getElementById("greenSock");
                  TweenLite.from(test, 1, { autoAlpha: 0 });
                
                   
                     }
                     



 

    if($(window).width() >= 1024){
       $(".zoom").each(function(i, el) {

        // create a timeline for this element in paused state
        var tl = new TimelineMax({
          paused: true
        });
    
        // create your tween of the timeline in a variable
        tl.to(el, 0.1, {
          scale: 1.005
        });
    
        // store the tween timeline in the javascript DOM node
        el.animation = tl;
    
        //create the event handler
        $(el).on("mouseenter", function() {
          //this.style.willChange = 'transform';
          this.animation.play();
          el.parentNode.appendChild(el);
        }).on("mouseleave", function() {
          //this.style.willChange = 'auto';
          el.parentNode.insertBefore(el, el.parentNode.firstChild);
          this.animation.reverse();
         
        });
      });
          } else {
             console.log('test');
          }
      
    

 

      // loop through each element
  


    // var $circle = $(".circle");

    
    // function moveCircle(e) {
    //   TweenLite.to($circle, 0.4, {
    //     css: {
    //       left: e.pageX,
    //       top: e.pageY,
    //       scale:.50,
    //     }
    //   });
    
    
    // }
    
    // document.addEventListener('mousemove', moveCircle)
 
    // var bt = document.querySelector('img');


    // bt.addEventListener('mouseover', overButton)
    // bt.addEventListener('mouseout', outButton)



    
    // function overButton() {
    //     TweenLite.to($circle, 0.15, {
    //         autoAlpha:0,
    //         ease:Linear.easeNone
    //     })
    // }
    
    // function outButton() {
    //     TweenLite.to($circle, 0.15, {
    //         autoAlpha:1,
    //         ease:Linear.easeNone
    //     })
    // }
    
 
   
    };

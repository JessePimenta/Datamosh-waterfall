// //<script src="http://cdn.rawgit.com/satcy/centiscript/master/js/release/centi.min.0.4.9g.js"></script>
// //<canvas id='c'></canvas>
//
// (function(){
// window.onload = function(){
//    var ct;
//    var canvas = document.getElementById('c');
//    ct = new Centi('ct');
//    ct.init(canvas, getAudioContext());
//    ct.setupFunc = init;
//    ct.drawFunc = draw;
//    ct.beatFunc = beat;
//    ct.dspFunc = dsp;
//    ct.mouseMove = onMouseMove;
//    ct.mouseDown = onMouseDown;
//    ct.mouseUp = onMouseUp;
//    ct.start();
//
//    requestAnimationFrame(update);
//
//    function init(){
// ct.sz(800,800);
// ct.bg(0);
//
//    }
//    function draw(){
// ct.clr();
// ct.num=(200);
// ct.cw=(ct.w/ct.num);
// for(ct.i=0;ct.i<ct.num*1;ct.i++){
// ct.ww=(ct.w/3); //width of shape also
// ct.hh=(ct.h/-3); // height of shape
// ct.x=(ct.i*ct.cw-ct.w/4);
// ct.y=(ct.cy);
// // ct.crash()
// ct.push();
// ct.translate(ct.y,ct.x)
// ct.push();
// ct.strk(20);
// ct.n1=ct.sin(ct.c*0.415+1+ct.i*0.07); // noise
// ct.n2=ct.sin(ct.c*0.03+3+ct.i*0.001); //speed
// ct.transform(2.5,ct.n1,-ct.n2,1,5,10); //width of shape
// ct.fill();
// ct.col(0);
// // ct.crash()
// ct.oval(-ct.ww/2,-ct.hh/2,ct.ww,ct.hh);
// ct.strk();
// ct.col((ct.sin(ct.c*0.03+(ct.i)-0.01)+1)*127,(155),(ct.cos(ct.c*0.01+(ct.i)*0.06)+1)*127);
// ct.rect(-ct.ww/2,-ct.hh/2,ct.ww,ct.hh);
// ct.pop();
// ct.pop();
// }
//
//    }
//    function beat(){
//
//    }
//    function dsp(){
//
//    }
//    function onMouseMove(e){
//     //  ct.col(rnd(0,255))
//     //  ct.col((ct.sin(ct.c*0.02+(ct.i)*0.01)+1)*rnd(0,127),(155),(ct.cos(ct.c*0.01+(ct.i)*0.06)+1)*127);
//     // ct.crash(20)
//
//    }
//    function onMouseDown(e){
//
//    }
//    function onMouseUp(e){
//
//    }
//    function update(){
//        requestAnimationFrame(update);
//        ct.update();
//    }
//
//    if ( window.addEventListener ) {
//        window.addEventListener('resize', onResize, true);
//    } else if ( window.onresize ) {
//        window.onresize = onResize;
//    }
//
//    function onResize(){
//        ct.size(ct.sizeW, ct.sizeH);
//    }
// };
// })();

//<script src="http://cdn.rawgit.com/satcy/centiscript/master/js/release/centi.min.0.4.9g.js"></script>
//<canvas id='c'></canvas>

(function(){
window.onload = function(){
   var ct;
   var canvas = document.getElementById('c');
   ct = new Centi('ct');
   ct.init(canvas, getAudioContext());
   ct.setupFunc = init;
   ct.drawFunc = draw;
   ct.beatFunc = beat;
   ct.dspFunc = dsp;
   ct.mouseMove = onMouseMove;
   ct.mouseDown = onMouseDown;
   ct.mouseUp = onMouseUp;
   ct.start();

   requestAnimationFrame(update);

   function init(){
ct.size(720,360);

   }
   function draw(){
for(ct.i=0;ct.i<427;ct.i++){
ct.col(ct.sin(ct.c*0.03+ct.i*0.0013)*128+128,ct.sin(ct.c*0.07+ct.i*0.0013)*128+128,ct.sin(ct.c*0.13+ct.i*0.0013)*128+128);
ct.x=(ct.w/2);
ct.y=(ct.h/2);
ct.line(ct.cos(ct.c*0.0004+ct.i*0.0002)*ct.w+ct.x,ct.sin(ct.c*0.00063+ct.i*0.00013)*ct.h+ct.y,ct.cos(ct.c*0.071+ct.i*0.00013)*ct.w+ct.x,ct.sin(ct.c*0.054+ct.i*0.00012)*ct.h+ct.y);
}

   }
   function beat(){

   }
   function dsp(){

   }
   function onMouseMove(e){
     ct.glitch(100)

   }
   function onMouseDown(e){

   }
   function onMouseUp(e){

   }
   function update(){
       requestAnimationFrame(update);
       ct.update();
   }

   if ( window.addEventListener ) {
       window.addEventListener('resize', onResize, false);
   } else if ( window.onresize ) {
       window.onresize = onResize;
   }

   function onResize(){
       ct.size(ct.sizeW, ct.sizeH);
   }
};
})();

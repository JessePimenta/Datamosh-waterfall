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
ct.sz(720,360);
ct.bg(0);
ct.m4i=function(){
return ([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
}
;ct.m4rz=function(){
return ([+ct.cos(arguments[0]),+ct.sin(arguments[0]),0,0,-ct.sin(arguments[0]),+ct.cos(arguments[0]),0,0,0,0,1,0,0,0,0,1]);
}
;ct.m4rx=function(){
return ([1,0,0,0,0,+ct.cos(arguments[0]),+ct.sin(arguments[0]),0,0,-ct.sin(arguments[0]),+ct.cos(arguments[0]),0,0,0,0,1]);
}
;ct.m4ry=function(){
return ([+ct.cos(arguments[0]),0,-ct.sin(arguments[0]),0,0,1,0,0,+ct.sin(arguments[0]),0,+ct.cos(arguments[0]),0,0,0,0,1]);
}
;ct.m4t=function(){
return ([1,0,0,0,0,1,0,0,0,0,1,0,arguments[0],arguments[1],arguments[2],1]);
}
;ct.m4s=function(){
return ([arguments[0],0,0,0,0,arguments[1],0,0,0,0,arguments[2],0,0,0,0,1]);
}
;ct.multMM=function(){
ct.m=ct.m4i();
for(ct.co=0;ct.co<4;ct.co++){
for(ct.ro=0;ct.ro<4;ct.ro++){
ct.tt=(0);
for(ct.ii=0;ct.ii<4;ct.ii++){
ct.tt+=(arguments[0][ct.ii*4+ct.co]*arguments[1][ct.ro*4+ct.ii]);
}
ct.m[ct.ro*4+ct.co]=(ct.tt);
}
}
return (ct.m);
}
;ct.multMV=function(){
ct.m=(arguments[0]);
ct.v=(arguments[1]);
ct.d=(1.0/(ct.m[3]*ct.v[0]+ct.m[7]*ct.v[1]+ct.m[11]*ct.v[2]+ct.m[15]));
return ([(ct.m[0]*ct.v[0]+ct.m[4]*ct.v[1]+ct.m[8]*ct.v[2]+ct.m[12])*ct.d,(ct.m[1]*ct.v[0]+ct.m[5]*ct.v[1]+ct.m[9]*ct.v[2]+ct.m[13])*ct.d,(ct.m[2]*ct.v[0]+ct.m[6]*ct.v[1]+ct.m[10]*ct.v[2]+ct.m[14])*ct.d]);
}
;ct.cmpz=function(){
return (arguments[0][2]-arguments[1][2]);
};
ct.S=(20);
ct.Q=(4);
ct.pers=([1/ct.tan(60*ct.PI/180),0,0,0,0,1/(ct.tan(60*ct.PI/180)*(ct.h/ct.w)),0,0,0,0,-(1000+3)/(1000-3),-1,0,0,-(2*1000*3)/(1000-3),0]);

   }
   function draw(){
ct.clr();
ct.sc=((ct.noise(ct.c*0.01,0)+5)/8);
ct.ma=ct.multMM(ct.pers,ct.multMM(ct.m4t(0,0,300),ct.multMM(ct.m4s(ct.sc,ct.sc,ct.sc),ct.multMM(ct.m4rx(ct.noise(ct.c*0.50063,4)*ct.PI+ct.PI),ct.m4rz(ct.noise(ct.c*0.03,2)*ct.PI)))));
ct.p=([]);
ct.I=(0);
for(ct.i=-ct.Q;ct.i<ct.Q+1;ct.i++){
for(ct.j=-ct.Q;ct.j<ct.Q+1;ct.j++){
for(ct.k=-ct.Q;ct.k<ct.Q+1;ct.k++){
ct.p[ct.I]=ct.multMV(ct.ma,[ct.i*(ct.SQRT2*ct.S),ct.j*(ct.SQRT2*ct.S),ct.k*(ct.SQRT2*ct.S)]);
ct.p[ct.I][3]=(256*ct.i/ct.Q+127);
ct.p[ct.I][4]=(256*ct.j/ct.Q+127);
ct.p[ct.I][5]=(256*ct.k/ct.Q+127);
ct.I+=(1);
}
}
}
ct.p.sort(ct.cmpz);
for(ct.i=0;ct.i<ct.I;ct.i++){
ct.pp=(ct.p[ct.i]);
ct.col(ct.pp[3],ct.pp[4],ct.pp[5],100);
ct.hexagon(ct.pp[0]*ct.w+ct.cx,ct.pp[1]*ct.h+ct.cy,ct.S/2);
}

   }
   function beat(){

   }
   function dsp(){

   }
   function onMouseMove(e){

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

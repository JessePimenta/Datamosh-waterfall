(function () {
  window.onload = function () {
    Centi.prototype.hex = function(_x, _y, _rad, _r) {
      var p = []
      var i = 0
      var r = 0
      var cr = Math.PI2 * 0.166667

      if (this.ctx == null) return;
      _rad = _rad || 10
      _r = _r || 0

      this.beginShape()
      for (i = 0; i < 6; i++) {
        r = cr * i + _r
        p.push({
          x: _x + _rad * Math.cos(r),
          y: _y + _rad * Math.sin(r)
        })
      }

      this.lines(p, true)
      this.endShape()
    }



    var ct
    var canvas = document.getElementById('c')
    var rMain = 0
    var rot = 0
    var rot2 = Math.random() * 1000

    ct = new Centi('ct')
    ct.init(canvas, null)
    ct.setupFunc = init
    ct.drawFunc = draw
    ct.start()
    requestAnimationFrame(update)

    function init () {
      rMain = ct.nz(rot2, rot, 7) * ct.w
      ct.sz(window.innerWidth, window.innerHeight)
      ct.bg(0)
      ct.x = ct.cx + rMain
      ct.y = ct.cy
      ct.time = 1300
      ct.b3d = true

    }

    function draw () {
      rot += 0.01
      rot2 += 0.025
      ct.strk(50)
      ct.mosaic(2, 30)

      // tracers
      ct.me(ct.mx / 8, ct.my /16, ct.w, ct.h, -40.1, -60.9, ct.w + 1, ct.h + 1)

      ct.col(0, 20,255 , 1)
      // ct.grad(0,20,255,1)
      // ct.fill(255)
      // ct.rect(0, 0, ct.w, ct.h)
      // glowy
      ct.blendMode('difference')
      ct.col(Math.sin(rot) * 255, 80, Math.cos(rot) * 255);
      ct.strk(50);
      // ooh... hexagons?
      // rHex = ct.nz(rot, rot2) * 50 + 25
      // ct.hex(ct.x, ct.y, rHex, rot);
      // rMain = ct.nz(rot2, rot) * ct.w;


      // weee
      ct.x = ct.cx + rMain * Math.cos(rot);
      ct.y = ct.cy + rMain * Math.sin(rot);
      //

      for (ct.i = 0; ct.i < 20; ct.i++) {
        ct.ww = ((ct.c + ct.i) % 100 * 25)
        ct.x = (-ct.ww / 2)
        ct.oval(ct.x + ct.cx, ct.x + ct.cy, ct.ww, ct.ww)
      }
      // ct.glitch(ct.rnd(50), ct.rnd(100), ct.rnd(10), ct.rnd(10));
      ct.crash(ct.rnd(1, 2))
      // ct.col(ct.rnd(4, 8))
      ct.oval(ct.cx, ct.cy, ct.h / 1.5, ct.rnd(4, 12))
      // ct.glitch(10,20,42,82)
    }

    function onMouseUp(e) {
       moveOval(ct.mx, ct.my);
   }

    function update () {
      requestAnimationFrame(update)
      ct.update()
    }
    if (window.addEventListener) {
      window.addEventListener('resize', onResize, false)
    } else if (window.onresize) {
      window.onresize = onResize
    }

    function onResize () {
      ct.sz(690,868);
      ct.bg(0)
      ct.x = ct.cy
      ct.y = ct.cy
    }
  }
})()

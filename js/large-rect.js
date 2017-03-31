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
      ct.w = ct.ww
      rMain = ct.nz(rot2, rot) * ct.w
      ct.sz(window.innerWidth, window.innerHeight)
      ct.bg(0)
      ct.x = ct.cx + rMain
      ct.y = ct.cy
    }

    function draw () {
      rot += 0.81
      rot2 -= 1.025
      ct.strk(50)

      // tracers, add lines etc
      // ct.me(ct.mx,ct.my, ct.w, ct.h, -0.5, -0.5, ct.w * 50, ct.h -2)
      ct.col(200, 0, 220, 5)
      ct.fill(255)
      ct.rect(0, 0, ct.w, ct.hh)
      // glowy
      ct.bm(ct.mx);
      ct.col(Math.sin(rot) * ct.rnd(255), ct.rnd(100), Math.sin(rot) * 25);
      ct.strk(150);
      // ooh... hexagons?
      rHex = ct.nz(rot, rot2) * 1050 + 25;
      ct.hex(ct.mx, ct.my, rHex, rot);
      rMain = ct.nz(rot2, rot) * ct.w;


      // weee
      ct.x = ct.cx + rMain / Math.sin(rot);
      ct.y = ct.cy + rMain * Math.cos(rot);
      //

      for (ct.i = 0; ct.i < 20; ct.i++) {
        ct.ww = ((ct.c + ct.i) % 150 * 25)
        ct.y = (-ct.ww / 2)
        ct.rect(ct.x + ct.cx, ct.x + ct.cy, ct.ww, ct.ww)
      }
      ct.col(ct.rnd(4, 12))
      ct.tri(ct.cx, ct.cy, ct.h / 1.5, ct.rnd(4, 12))
      ct.crash(ct.mx, ct.my);
      ct.glitch(ct.mx, ct.my);
      // ct.crash(ct.rnd(0, 0))
      // ct.glitch()
    }

    function onMouseMove(e) {
      requestAnimationFrame(update)


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
      ct.sz(window.innerWidth, window.innerHeight);
      ct.bg(0)
      ct.x = ct.cy
      ct.y = ct.cy
    }
  }
})()

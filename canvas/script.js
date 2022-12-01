(() => {
  const config = {
    dotMinRad: 6,
    dotMaxRad: 20,
    massFactor: 0.002,
    defColor: `rgba(250, 10, 30, 0.9)`,
  };

  const TWO_PI = 2 * Math.PI;
  const canvas = document.querySelector(`canvs`);
  const ctx = canvas.getContext("2d");

  let width, height, mouse, dots;

  class Dot {
    constructor() {
      this.position = { x: mouse.x, y: mouse.y };
      this.velocity = { x: 0, y: 0 };
      this.radius = random(config.dotMinRad, config.dotMaxRad);
      this.mass = this.rad * massFactor;
      this.color = config.defColor;
    }

    draw() {
      createCircle(
        this.position.x,
        this.position.y,
        this.radius,
        true,
        this.color
      );
      createCircle(
        this.position.x,
        this.position.y,
        this.radius,
        false,
        config.defColor
      );
    }
  }

  function createCircle(x, y, radius, fill, color) {
    ctx.fillStyle = ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TWO_PI);
    ctx.closePath();
    fill ? ctx.fill() : ctx.stroke();
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function init() {
    width = canvas.width = innerWidth;
    height = canvas.height = innerHeight;

    mouse = { x: width / 2, y: height / 2, down: false };
    dots = [];
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    if (mouse.down) { dots.push(new Dot()); }
    dots.map(e => e.draw());

    window.requestAnimationFrame(loop);
  }

  init();
  loop();

  function setPosition({ layerX, layerY }) {
    [mouse.x, mouse.y] = [layerX, layerY];
  }

  function isDown() {
    mouse.down = !mouse.down;
  }

  canvas.addEventListener(`mousemove`, setPosition);
  window.addEventListener(`mousedown`, isDown);
  window.addEventListener(`mouseup`, isDown);
})();

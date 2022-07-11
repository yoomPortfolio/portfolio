import tinycolor from "https://cdn.skypack.dev/tinycolor2@1.4.2";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";

const simplex = new SimplexNoise(Math.random);

console.clear();

class GradientBG {
  constructor(width = 1920, height = 1080, target = document.body) {
    this.width = width;
    this.height = height;
    this.target = target;

    this.svgns = "http://www.w3.org/2000/svg";
    this.SVGElement = this._createSVGElement();

    this.id = Math.random();
  }

  generate() {
    this.SVGElement.innerHTML = "";
    this.defs = this._createDefs();
    this.backgroundGradient = this._createBackgroundGradient();
    this.blurFilter = this._createBlurFilter();

    let baseColor = tinycolor(
      `hsl(${~~this._random(0, 360)}, ${this._random(75, 100)}, ${this._random(
        80,
        92
      )}%)`
    );

    let combinations = baseColor.splitcomplement();
    let secondaryColor = combinations[~~this._random(1, combinations.length)];

    let secondaryCombinations = secondaryColor.splitcomplement();

    const stopOffset1 = this._random(0, 25);
    const stopOffset2 = 100 - this._random(0, 25);

    this.backgroundGradient.stop1.setAttribute(
      "stop-color",
      baseColor.toHslString()
    );
    this.backgroundGradient.stop2.setAttribute(
      "stop-color",
      secondaryColor.toHslString()
    );

    this.backgroundGradient.stop1.setAttribute("offset", `${stopOffset1}%`);
    this.backgroundGradient.stop2.setAttribute("offset", `${stopOffset2}%`);

    const maxBlobSize = Math.min(this.width, this.height);

    this._blob({
      x: `${this._random(0, this.width / 4)}`,
      y: `${this._random(0, this.height / 4)}`,
      r: `${this._random(maxBlobSize / 2, maxBlobSize)}`,
      fill: combinations[~~this._random(0, combinations.length)]
    });

    this._blob({
      x: `${this._random(this.width - this.width / 4, this.width)}`,
      y: `${this._random(0, this.height / 4)}`,
      r: `${this._random(maxBlobSize / 2, maxBlobSize)}`,
      fill: combinations[~~this._random(0, combinations.length)]
    });

    this._blob({
      x: `${this._random(0, this.width / 4)}`,
      y: `${this._random(this.height - this.height / 4, this.height)}`,
      r: `${this._random(maxBlobSize / 2, maxBlobSize)}`,
      fill:
        secondaryCombinations[~~this._random(0, secondaryCombinations.length)]
    });

    this._blob({
      x: `${this._random(this.width - this.width / 4, this.width)}`,
      y: `${this._random(this.height - this.height / 4, this.height)}`,
      r: `${this._random(maxBlobSize / 2, maxBlobSize)}`,
      fill:
        secondaryCombinations[~~this._random(0, secondaryCombinations.length)]
    });
  }

  _createSVGElement() {
    const el = document.createElementNS(this.svgns, "svg");

    el.setAttribute("viewBox", `0 0 ${this.width} ${this.height}`);
    el.setAttribute("preserveAspectRatio", "xMidYMid slice");

    this.target.appendChild(el);

    return el;
  }

  _createDefs() {
    const el = document.createElementNS(this.svgns, "defs");

    this.SVGElement.appendChild(el);

    return el;
  }

  _createBackgroundGradient() {
    const el = document.createElementNS(this.svgns, "linearGradient");

    el.id = "bgGradient" + this.id;
    el.setAttribute("gradientTransform", "rotate(90)");

    const stop1 = document.createElementNS(this.svgns, "stop");
    stop1.setAttribute("offset", `${~~this._random(0, 25)}%`);

    const stop2 = document.createElementNS(this.svgns, "stop");
    stop2.setAttribute("offset", `${~~this._random(75, 100)}%`);

    el.appendChild(stop1);
    el.appendChild(stop2);

    this.defs.appendChild(el);

    const rect = document.createElementNS(this.svgns, "rect");

    rect.setAttribute("x", "0");
    rect.setAttribute("y", "0");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", `url(#bgGradient${this.id})`);

    this.SVGElement.appendChild(rect);

    return {
      rect: rect,
      stop1: stop1,
      stop2: stop2
    };
  }

  _createBlurFilter() {
    const el = document.createElementNS(this.svgns, "filter");

    el.id = "blur" + this.id;
    el.setAttribute("x", "-100%");
    el.setAttribute("y", "-100%");
    el.setAttribute("width", "300%");
    el.setAttribute("height", "300%");

    const gaussianBlur = document.createElementNS(this.svgns, "feGaussianBlur");

    gaussianBlur.setAttribute("in", "SourceGraphic");
    gaussianBlur.setAttribute("stdDeviation", this._random(100, 110));

    el.appendChild(gaussianBlur);

    this.defs.appendChild(el);

    return el;
  }

  _blob({ x, y, r, fill, filter = `url(#blur${this.id})` }) {
    const circle = document.createElementNS(this.svgns, "circle");

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);

    circle.setAttribute("fill", fill);
    circle.setAttribute("filter", filter);

    this.SVGElement.appendChild(circle);

    return circle;
  }

  _random(min, max) {
    return Math.random() * (max - min) + min;
  }
}

const gradient = new GradientBG();
gradient.generate();

const circles = [];

document.querySelectorAll("circle").forEach((el) => {
  circles.push({
    el,
    x: ~~el.getAttribute("cx"),
    y: ~~el.getAttribute("cy"),
    originX: ~~el.getAttribute("cx"),
    originY: ~~el.getAttribute("cy"),
    xOff: Math.random(),
    yOff: Math.random()
  });
});

function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

(function animate() {
  circles.forEach((c) => {
    const noiseX = simplex.noise2D(c.xOff, c.xOff);
    const noiseY = simplex.noise2D(c.yOff, c.yOff);

    const x = map(noiseX, 0, 1, 0, 1920);
    const y = map(noiseY, 0, 1, 0, 1080);

    c.el.setAttribute("cx", x);
    c.el.setAttribute("cy", y);

    c.xOff += 0.002;
    c.yOff += 0.002;
  });
  requestAnimationFrame(animate);
})();
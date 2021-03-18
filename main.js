var tone = require("tonegenerator");
var Pizzicato = require("pizzicato");
const duration = 3;
const goldenRatio = 1.61803398875;
const freqs = [...Array(10)].map((a, idx) => 50 * goldenRatio ** idx);

console.log("crating tones");
const tones = freqs.map(
  freq =>
    new Pizzicato.Sound({
      source: "wave",
      options: {
        frequency: freq
      }
    })
);

var group = new Pizzicato.Group(tones);
group.play();

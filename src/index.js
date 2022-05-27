document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

const ErgastClient = require('ergast-client');
const ergast = new ErgastClient();
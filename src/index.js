const ErgastClient = require('./scripts/test.js');
const ergast = require('./scripts/test.js');


document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ergast.getDrivers(2014, function(err, drivers) {
    if (!err) console.log(drivers);
  });

  debugger
})


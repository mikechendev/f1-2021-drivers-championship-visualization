import perRaceData, { raceResults, drivers, constructorStandings, driverStandings, round1 } from './scripts/data';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return round1();
  // console.log(drivers);
  // console.log(driverStandings);
  // console.log(constructorStandings);
})


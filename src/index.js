import { config, setAnimate } from './scripts/chart.js';
import { fetchResults } from './scripts/data.js';

// document.addEventListener('DOMContentLoaded', () => {
// });

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, config);
let races = 22;
console.log(fetchResults(1));
setAnimate(myChart, races);

// const restartButton = document.querySelector('#restart');
// // debugger;

// restartButton.addEventListener('click', function () {
//   // debugger;
//   myChart.destroy();
//   // debugger;
//   myChart = new Chart(ctx, config);
//   // debugger;
//   races = 22;
//   setAnimate(myChart, races);
// });

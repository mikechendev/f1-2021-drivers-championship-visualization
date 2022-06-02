import { config, setAnimate } from './scripts/chart.js';

// document.addEventListener('DOMContentLoaded', () => {
// });

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);
const races = 22;
setAnimate(myChart, races);

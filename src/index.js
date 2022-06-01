// import { fetchData, fetchAllRaces, createDrivers } from './scripts/data';
import { config, setAnimate } from './scripts/chart.js';

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('its working');
// });

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);
setAnimate(myChart);

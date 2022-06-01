// import { fetchData, fetchAllRaces, createDrivers } from './scripts/data';
import { config, setAnimate } from './scripts/chart.js';

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, config);
  // console.log(config);
});

// console.log(createDrivers());
// console.log(fetchAllRaces());
// let data = await fetchAllRaces();
// console.log(data);

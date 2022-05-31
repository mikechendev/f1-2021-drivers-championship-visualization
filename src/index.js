import { fetchData, fetchAllRaces, createDrivers } from './scripts/data';
// import { config } from './scripts/chart';

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('myChart').getContext('2d');
  // const myChart = new Chart(ctx, config);
  // console.log(config);
});

console.log(createDrivers());
// let data = await fetchAllRaces();
// console.log(data);

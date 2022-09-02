import { config, setAnimate } from './scripts/chart.js';
import { createRaces } from './scripts/data.js';

// document.addEventListener('DOMContentLoaded', () => {

// });

let chartContainer = document.querySelector('.chart-container');

const clearDiv = () => {
  while (chartContainer.firstChild) {
    chartContainer.removeChild(chartContainer.firstChild);
  }
};

const chart = () => {
  let canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'myChart');
  chartContainer.append(canvas);
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, config);
  let races = 22;
  setAnimate(myChart, races);
};

let div = document.createElement('div');
div.innerText = 'test';

chart();
clearDiv();
chartContainer.append(div);
clearDiv();
chart();

const dropdown = document.querySelector('.dropdown');
const menu = dropdown.querySelector('.menu');

let allRaces = createRaces();
allRaces.forEach((race) => {
  let li = document.createElement('li');
  li.innerText = race.raceName;
  li.value = race.round;
  menu.appendChild(li);
});

const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');

select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    selected.innerText = option.innerText;
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');
    options.forEach((option) => {
      option.classList.remove('active');
    });
    option.classList.add('active');
  });
});

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

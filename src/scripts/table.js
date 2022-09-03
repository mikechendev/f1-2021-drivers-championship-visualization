import { createRaces } from './data';

export const createTable = (value) => {
  const chartContainer = document.querySelector('.chart-container');
  const clearDiv = () => {
    while (chartContainer.firstChild) {
      chartContainer.removeChild(chartContainer.firstChild);
    }
  };
  const races = createRaces();
  const race = races.find((race) => value == race.round);

  let div = document.createElement('div');
  let tableContainer = document.createElement('div');
  let titleDiv = document.createElement('div');
  let dateDiv = document.createElement('div');
  let locationDiv = document.createElement('div');
  let circuitLink = document.createElement('a');
  let circuitDiv = document.createElement('div');

  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let headTr = document.createElement('tr');

  // table headers

  let posTh = document.createElement('th');
  posTh.innerText = 'pos';
  let gridTh = document.createElement('th');
  gridTh.innerText = 'grid';
  let numTh = document.createElement('th');
  numTh.innerText = 'num';
  let driverTh = document.createElement('th');
  driverTh.innerText = 'driver';
  let teamTh = document.createElement('th');
  teamTh.innerText = 'constructor';
  let lapsTh = document.createElement('th');
  lapsTh.innerText = 'laps';
  let timeTh = document.createElement('th');
  timeTh.innerText = 'time';
  let pointsTh = document.createElement('th');
  pointsTh.innerText = 'points';

  tableContainer.classList.add('table-container');

  titleDiv.classList.add('title-div');
  titleDiv.innerText = race.raceName;

  circuitDiv.classList.add('circuit-div');
  circuitDiv.innerText = race.circuit;
  circuitLink.href = race.circuitUrl;
  circuitLink.append(circuitDiv);

  dateDiv.classList.add('info-div');
  dateDiv.innerText = race.date;

  locationDiv.classList.add('location-div');
  locationDiv.innerText = `${race.locality}, ${race.country}`;

  headTr.append(
    posTh,
    gridTh,
    numTh,
    driverTh,
    teamTh,
    lapsTh,
    timeTh,
    pointsTh
  );
  thead.append(headTr);
  table.append(thead);

  clearDiv();
  tableContainer.append(titleDiv, circuitLink, dateDiv, locationDiv, table);
  chartContainer.append(tableContainer);

  console.log(race);
};

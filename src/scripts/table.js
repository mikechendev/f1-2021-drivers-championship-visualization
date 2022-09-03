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
  let tbody = document.createElement('tbody');

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

  // loop for table data

  for (let i = 0; i < race.results.length; i++) {
    let newTr = document.createElement('tr');

    let pos = document.createElement('td');
    pos.innerText = race.results[i].position;

    let grid = document.createElement('td');
    grid.innerText = race.results[i].grid;

    let num = document.createElement('td');
    num.innerText = race.results[i].number;

    let driver = document.createElement('td');
    let driverUrl = document.createElement('a');
    driverUrl.href = race.results[i].Driver.url;
    driverUrl.innerText = `${race.results[i].Driver.givenName} ${race.results[i].Driver.familyName}`;
    driver.append(driverUrl);

    let constructor = document.createElement('td');
    let constructorUrl = document.createElement('a');
    constructorUrl.href = race.results[i].Constructor.url;
    constructorUrl.innerText = race.results[i].Constructor.name;
    constructor.append(constructorUrl);

    let laps = document.createElement('td');
    laps.innerText = race.results[i].laps;

    let time = document.createElement('td');
    time.innerText = race.results[i].Time ? race.results[i].Time.time : '-';

    let points = document.createElement('td');
    points.innerText = race.results[i].points;

    newTr.append(pos, grid, num, driver, constructor, laps, time, points);
    tbody.append(newTr);
  }

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
  table.append(tbody);

  clearDiv();
  tableContainer.append(circuitLink, dateDiv, locationDiv, table);
  chartContainer.append(tableContainer);

  console.log(race);
};

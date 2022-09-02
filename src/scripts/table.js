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

  let tableContainer = document.createElement('div');
  let titleDiv = document.createElement('div');
  let dateDiv = document.createElement('div');
  let locationDiv = document.createElement('div');
  let circuitLink = document.createElement('a');
  let circuitDiv = document.createElement('div');

  let table = document.createElement('table');
  let th = document.createElement('th');
  let td = document.createElement('td');

  tableContainer.classList.add('table-container');

  titleDiv.classList.add('title-div');
  titleDiv.innerText = race.raceName;
  tableContainer.append(titleDiv);

  circuitDiv.classList.add('circuit-div');
  circuitDiv.innerText = race.circuit;
  circuitLink.href = race.circuitUrl;
  circuitLink.append(circuitDiv);
  tableContainer.append(circuitLink);

  dateDiv.classList.add('info-div');
  dateDiv.innerText = race.date;
  tableContainer.append(dateDiv);

  locationDiv.classList.add('location-div');
  locationDiv.innerText = `${race.locality}, ${race.country}`;
  tableContainer.append(locationDiv);

  clearDiv();
  chartContainer.append(tableContainer);
};

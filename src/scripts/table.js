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

  let titleDiv = document.createElement('div');
  let dateDiv = document.createElement('div');
  let locationDiv = document.createElement('div');
  let table = document.createElement('table');
  let th = document.createElement('th');
  let td = document.createElement('td');

  titleDiv.classList.add('title-div');
  titleDiv.innerText = race.raceName;
  dateDiv.classList.add('info-div');
  dateDiv.innerText = race.date;
  locationDiv.classList.add('location-div');
  locationDiv.innerText = `${race.locality}, ${race.country}`;

  clearDiv();
  chartContainer.append(titleDiv, dateDiv, locationDiv);
};

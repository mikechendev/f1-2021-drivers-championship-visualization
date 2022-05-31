import Driver from './driver';

export async function fetchData(round) {
  const url = `https://ergast.com/api/f1/2021/${round}/driverstandings.json`;
  const response = await fetch(url);
  const data = await response.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

export async function fetchAllRaces() {
  const promises = [];
  let round = 1;
  while (round < 23) {
    const data = fetchData(round);
    promises.push(data);
    round++;
  }
  const results = await Promise.all(promises);
  return results;
}

const races = await fetchAllRaces();

export const createDrivers = () => {
  let drivers = [];
  for (let i = 0; i < races.length; i++) {
    let race = races[i];
    for (let j = 0; j < race.length; j++) {
      let driver = races[i][j];
      let k = drivers.findIndex(
        (racer) =>
          racer.name ===
          `${driver.Driver.givenName} ${driver.Driver.familyName}`
      );
      if (k > -1) {
        drivers[k].rounds.push(i + 1);
        drivers[k].points.push(parseFloat(driver.points));
      } else {
        let name = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
        let team = driver.Constructors[0].name;
        let newDriver = new Driver(name, team);
        newDriver.rounds.push(i + 1);
        newDriver.points.push(parseFloat(driver.points));
        drivers.push(newDriver);
      }
    }
  }
  return drivers;
};

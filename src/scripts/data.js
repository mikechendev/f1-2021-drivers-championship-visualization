import Driver from './driver';

// export default function perRaceData (apiParam) {
//   let i = 1;
//   let result = [];
//   while (i < 8) {
//     let url = `https://ergast.com/api/f1/current/${i}/${apiParam}.json`;
//     d3.json(url, data => {
//       result.push(data['MRData']);
//     })
//     i++;
//   }
//   return result;
// }

// const url = `https://ergast.com/api/f1/current/${i}/${apiParam}.json`;

// export const raceResults = perRaceData('results');
// export const drivers = perRaceData('drivers');
// export const driverStandings = perRaceData('driverStandings');
// export const constructorStandings = perRaceData('constructorStandings');

// export const r1DriversStandings = () => {
//   // let res = [];
//   let apiParam = 'driverStandings';
//   let i = 1;
//   let url = `https://ergast.com/api/f1/current/${i}/${apiParam}.json`;
//   d3.json(url)
//     .then(data => {
//       console.log(data['MRData']['StandingsTable']['StandingsLists']['0']['DriverStandings']['0']);
//     })
//   // res.map(el => {
//   //   return new Driver(el['Driver'], el['position'], el['points']);
//   // })
//   // return res;
// }

export async function fetchData(round, apiParam, lap = null) {
  const url = `https://ergast.com/api/f1/current/${round}/${apiParam}${
    lap !== null ? `/${lap}` : ''
  }.json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
  // console.log(data);
  // return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

export async function fetchAllRaces() {
  const promises = [];
  let round = 1;
  while (round < 8) {
    const data = fetchLaps(round);
    promises.push(data);
    round++;
  }
  const results = await Promise.all(promises);
  return results;
}

async function fetchLaps(round) {
  const promises = [];
  let lap = 1;
  while (fetchData(round, 'laps', lap).MRData.total !== 0) {
    const data = fetchData(round, 'laps', lap);
    promises.push(data);
    lap++;
  }
  const results = await Promise.all(promises);
  return results;
}

// export default function perRaceData () {
//   let apiParam = 'driverStandings';
//   let url = `https://ergast.com/api/f1/current/1/${apiParam}.json`;
//   let fetched = fetch(url);
//   return fetched.then(res => {
//     return res.json()
//   }).then(data => data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
// }

// const cacheTime = 1000000;
// const cache = {};
// let cacheTimer = 0;

// const getCacheTimer = time => {
//   const currentTime = new Date().getTime();
//   if (cacheTimer < currentTime + time) {
//     cacheTimer = currentTime + time;
//   }
//   return cacheTimer;
// }

// const fetchWithCache = async (time) => {
//   const currentTime = new Date().getTime();
//   if (!cache() || cache[].cacheTimer < currentTime) {
//     cache[] = await fetchRaceDate();
//     cache[].cacheTimer = getCacheTimer(time);
//   }
//   return cache[];
// }

// const raceResults = fetch('https://ergast.com/api/f1/current/results.json?limit=30&offset=120')
//   .then(result => result.json())
//   .then(data => console.log(data))

//fetch race results for season
// const raceResultsURL = 'https://ergast.com/api/f1/current/results.json?limit=30&offset=120';

// export default function perRaceData (apiParam) {
//   let i = 1;
//   let result = [];
//   while (i < 8) {
//     let url = `https://ergast.com/api/f1/current/${i}/${apiParam}.json`;
//     let fetched = fetchData(url);
//     result.push(fetched)
//     i++;
//   }
//   return result;
// }

// export const round1 = () => {
//   raceResults[0].then(val => {
//     d3.json(val, data => {
//       console.log(data);
//     });
//   })
// }

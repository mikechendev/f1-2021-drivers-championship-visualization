//get data for: race results, laps, pitstops, drivers

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
const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
}

// const raceResultsURL = 'https://ergast.com/api/f1/current/results.json?limit=30&offset=120';

const perRaceData = (apiParam) => {
  let i = 1;
  while (i < 8) {
    let url = `https://ergast.com/api/f1/current/${i}/${apiParam}`;

  }
}


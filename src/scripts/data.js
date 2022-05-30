//get data for: race results, laps, pitstops, drivers

const cacheTime = 10000;
const cache = {};
let cacheTimer = 0;

const getCacheTimer = time => {
  const currentTime = new Date().getTime();
  if (cacheTimer < currentTime + time) {
    cacheTimer = currentTime + time;
  }
  return cacheTimer;
}

const fetchWithCache = async () => {
  const currentTime = new Date().getTime();
  if (!cache() || cache[].cacheTimer < currentTime) {
    cache[] = await fetchRaceDate();
    cache[].cacheTimer = getCacheTimer(time);
  }
  return cache[];
}
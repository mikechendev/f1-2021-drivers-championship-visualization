import { createDrivers } from './data';

const drivers = createDrivers();

const labels = () => {
  let result = [];
  drivers.forEach((driver) => {
    result.push(driver.name);
  });
  return result;
};

const raceData = {
  labels: labels(),
  datasets: [
    {
      label: 'Points',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: [
        'rgb(108,211,191)', //ham
        'rgb(30,91,198)', //ver
        'rgb(108,211,191)', //bot
        'rgb(245,128,32)', //nor
        'rgb(30,91,198)', //per
        'rgb(237,28,36)', //lec
        'rgb(245,128,32)', //ric
        'rgb(237,28,36)', //sai
        'rgb(78,124,155)', //tsu
        'rgb(45,130,109)', //str
        'rgb(172,32,57)', //rai
        'rgb(172,32,57)', //gio
        'rgb(34,147,209)', //oco
        'rgb(55,190,221)', //rus
        'rgb(45,130,109)', //vet
        'rgb(182,186,189)', //sch
        'rgb(78,124,155)', //gas
        'rgb(55,190,221)', //lat
        'rgb(34,147,209)', //alo
        'rgb(182,186,189)', //maz
        'rgb(172,32,57)', //kub
      ],
      borderWidth: 1,
    },
  ],
};
export const config = {
  type: 'bar',
  data: raceData,
  options: {
    plugins: {
      title: {
        display: true,
        text: '',
        font: { size: 16 },
      },
      legend: {
        display: true,
        labels: {
          color: 'rgb(0,0,0)',
        },
      },
    },
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        ticks: {
          color: ['black'],
        },
      },
    },
  },
};

const raceNames = [
  'Bahrain Grand Prix',
  'Emilia Romagna Grand Prix',
  'Portuguese Grand Prix',
  'Spanish Grand Prix',
  'Monaco Grand Prix',
  'Azerbaijan Grand Prix',
  'French Grand Prix',
  'Styrian Grand Prix',
  'Austrian Grand Prix',
  'British Grand Prix',
  'Hungarian Grand Prix',
  'Belgian Grand Prix',
  'Dutch Grand Prix',
  'Italian Grand Prix',
  'Russian Grand Prix',
  'Turkish Grand Prix',
  'United States Grand Prix',
  'Mexico City Grand Prix',
  'São Paulo Grand Prix',
  'Qatar Grand Prix',
  'Saudi Arabian Grand Prix',
  'Abu Dhabi Grand Prix',
];

// let ref;
// let activeChart = document.querySelector('myChart');

// export const animate = () => {
//   myChart.options.plugins.title.text = `Round ${i + 1}: ${raceNames[i]}`;
//   for (let j = 0; j < drivers.length; j++) {
//     let data = update(chart);
//     increment(data, chart, i, j);
//     ++i;
//     if (i === 22) clearInterval(ref);
//   }
// };

// export const intervalManager = (activeChart) => {
//   if (activeChart) {
//     ref = setInterval(animate, 2000);
//   } else {
//     clearInterval(ref);
//   }
// };

let refId;

export function setAnimate(chart) {
  if (refId !== undefined) clearInterval(refId);
  let i = 0;
  let newData = chart.config.data.datasets[0].data.map((pts) => (pts = 0));
  chart.config.data.datasets[0].data = newData;
  let ref = setInterval(() => {
    console.log(ref);
    chart.options.plugins.title.text = `Round ${i + 1}: ${raceNames[i]}`;
    for (let j = 0; j < drivers.length; j++) {
      let data = update(chart);
      increment(data, chart, i, j);
    }
    ++i;
    if (i === 22 || i === 0) {
      clearInterval(ref);
    }
  }, 2000);
  refId = ref;
}

function update(chart) {
  let merged = chart.config.data.labels.map((label, i) => {
    return {
      labels: chart.config.data.labels[i],
      dataPoints: chart.config.data.datasets[0].data[i],
      backgroundColor: chart.config.data.datasets[0].backgroundColor[i],
    };
  });
  const label = [];
  const dataPoints = [];
  const backgroundColor = [];

  const dataSort = merged.sort((b, a) => {
    return a.dataPoints - b.dataPoints;
  });

  for (let i = 0; i < dataSort.length; i++) {
    label.push(dataSort[i].labels);
    dataPoints.push(dataSort[i].dataPoints);
    backgroundColor.push(dataSort[i].backgroundColor);
  }
  chart.config.data.labels = label;
  chart.config.data.datasets[0].data = dataPoints;
  chart.config.data.datasets[0].backgroundColor = backgroundColor;

  return [label, dataPoints, backgroundColor];
}

const increment = (data, chart, n, j) => {
  let label = data[0];
  // console.log(label);
  let dataPoints = data[1];
  // console.log(dataPoints);
  let backgroundColor = data[2];
  // console.log(dataPoints[label.indexOf(`${drivers[0].name}`)]);
  // console.log(`${drivers[0].points[drivers[0].points.length - 1]}`);
  if (
    dataPoints[label.indexOf(`${drivers[j].name}`)] <
    `${drivers[j].points[drivers[j].points.length - 1]}`
  ) {
    dataPoints[label.indexOf(`${drivers[j].name}`)] +=
      n === 0
        ? drivers[j].points[n]
        : drivers[j].points[n] - drivers[j].points[n - 1];
  }
  chart.update();
};

import { createDrivers } from './data';

const drivers = createDrivers();

console.log(drivers);

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
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  },
};

export function setAnimate(chart) {
  setInterval(function update() {
    let merged = chart.config.data.labels.map((label, i) => {
      return {
        labels: chart.config.data.labels[i],
        dataPoints: chart.config.data.datasets[0].data[i],
        backgroundColor: chart.config.data.datasets[0].backgroundColor[i],
        // borderColor: chart.config.data.datasets[0].borderColor[i],
      };
    });
    const label = [];
    const dataPoints = [];
    const backgroundColor = [];
    // const borderColor = [];

    const dataSort = merged.sort((b, a) => {
      return a.dataPoints - b.dataPoints;
    });

    for (let i = 0; i < dataSort.length; i++) {
      label.push(dataSort[i].labels);
      dataPoints.push(dataSort[i].dataPoints);
      backgroundColor.push(dataSort[i].backgroundColor);
      // borderColor.push(dataSort[i].borderColor);
    }
    chart.config.data.labels = label;
    chart.config.data.datasets[0].data = dataPoints;
    chart.config.data.datasets[0].backgroundColor = backgroundColor;
    // chart.config.data.datasets[0].borderColor = borderColor;

    //Put update logic here

    for (let n = 0; n < 23; n++) {
      for (let j = 0; j < drivers.length; j++) {
        if (
          dataPoints[label.indexOf(`${drivers[j].name}`)] <
          `${drivers[j].points[drivers[j].points.length - 1]}`
        ) {
          dataPoints[label.indexOf(`${drivers[j].name}`)] +=
            n === 0
              ? drivers[j].points[n]
              : drivers[j].points[n] - drivers[j].points[n - 1];
          // debugger;
        }
      }
    }
    chart.update();
  }, 2000);
}

// drivers.forEach((driver) => {
//   let i = 0;
//   if (
//     dataPoints[label.indexOf(`${driver.name}`)] <
//     `${driver.points[driver.points.length - 1]}`
//   ) {
//     dataPoints[label.indexOf(`${driver.name}`)] +=
//       i === 0 ? driver.points[i] : driver.points[i] - driver.points[i - 1];
//     i++;
//   }
// });

import { createDrivers } from './data';

const drivers = () => {
  return createDrivers();
};

const labels = () => {
  let result = [];
  drivers().forEach((driver) => {
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
        rgb(0, 210, 90), //ham
        rgb(6, 0, 239), //ver
        rgb(0, 210, 90), //bot
        rgb(255, 135, 0), //nor
        rgb(6, 0, 239), //per
        rgb(220, 0, 0), //lec
        rgb(255, 135, 0), //ric
        rgb(220, 0, 0), //sai
        rgb(43, 69, 98), //tsu
        rgb(0, 111, 98), //str
        rgb(144, 0, 0), //rai
        rgb(144, 0, 0), //gio
        rgb(0, 144, 255), //oco
        rgb(0, 90, 255), //rus
        rgb(0, 111, 98), //vet
        rgb(255, 255, 255), //sch
        rgb(43, 69, 98), //gas
        rgb(0, 90, 255), //lat
        rgb(0, 144, 255), //alo
        rgb(255, 255, 255), //maz
        rgb(144, 0, 0), //kub
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
  setInterval(function update(chart) {
    let merged = chart.config.data.labels.map((label, i) => {
      return {
        labels: chart.config.data.labels[i],
        dataPoints: chart.config.data.datasets[0].data[i],
        backgroundColor: chart.config.data.datasets[0].backgroundColor[i],
        borderColor: chart.config.data.datasets[0].borderColor[i],
      };
    });
    const label = [];
    const dataPoints = [];
    const backgroundColor = [];
    const borderColor = [];

    const dataSort = merged.sort((b, a) => {
      return a.dataPoints - b.dataPoints;
    });

    for (let i = 0; i < dataSort.length; i++) {
      label.push(dataSort[i].labels);
      dataPoints.push(dataSort[i].dataPoints);
      backgroundColor.push(dataSort[i].backgroundColor);
      borderColor.push(dataSort[i].borderColor);
    }
    chart.config.data.labels = label;
    chart.config.data.datasets[0].data = dataPoints;
    chart.config.data.datasets[0].backgroundColor = backgroundColor;
    chart.config.data.datasets[0].borderColor = borderColor;

    //Put update logic here

    chart.update();
  }, 1000);
}

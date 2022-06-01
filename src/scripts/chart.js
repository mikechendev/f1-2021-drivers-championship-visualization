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
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(237,28,36)',
        'rgb(30,91,198)',
        'rgb(237,28,36)',
        'rgb(108,211,191)',
        'rgba(75, 192, 192, 0.2)',
        'rgb(30,91,198)',
        'rgb(108,211,191)',
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

    chart.update();
  }, 1000);
}

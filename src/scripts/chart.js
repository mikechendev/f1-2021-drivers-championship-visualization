let config = {
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

const raceData = {
  labels: [],
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

  if (dataPoints[label.indexOf('Leclerc')] < 1000) {
    dataPoints[label.indexOf('Leclerc')] += 45;
  }
  if (dataPoints[label.indexOf('Sainz')] < 975) {
    dataPoints[label.indexOf('Sainz')] += 40;
  }
  if (dataPoints[label.indexOf('Hamilton')] < 950) {
    dataPoints[label.indexOf('Hamilton')] += 35;
  }
  if (dataPoints[label.indexOf('Russell')] < 925) {
    dataPoints[label.indexOf('Russell')] += 35;
  }
  if (dataPoints[label.indexOf('Magnussen')] < 900) {
    dataPoints[label.indexOf('Magnussen')] += 35;
  }
  if (dataPoints[label.indexOf('Bottas')] < 875) {
    dataPoints[label.indexOf('Bottas')] += 35;
  }
  if (dataPoints[label.indexOf('Ocon')] < 850) {
    dataPoints[label.indexOf('Ocon')] += 25;
  }
  if (dataPoints[label.indexOf('Tsunoda')] < 825) {
    dataPoints[label.indexOf('Tsunoda')] += 25;
  }
  if (dataPoints[label.indexOf('Alonso')] < 800) {
    dataPoints[label.indexOf('Alonso')] += 25;
  }
  if (dataPoints[label.indexOf('Zhou')] < 775) {
    dataPoints[label.indexOf('Zhou')] += 25;
  }
  if (dataPoints[label.indexOf('Schumacher')] < 750) {
    dataPoints[label.indexOf('Schumacher')] += 25;
  }
  if (dataPoints[label.indexOf('Stroll')] < 725) {
    dataPoints[label.indexOf('Stroll')] += 25;
  }
  if (dataPoints[label.indexOf('Albon')] < 700) {
    dataPoints[label.indexOf('Albon')] += 25;
  }
  if (dataPoints[label.indexOf('Ricciardo')] < 675) {
    dataPoints[label.indexOf('Ricciardo')] += 25;
  }
  if (dataPoints[label.indexOf('Norris')] < 650) {
    dataPoints[label.indexOf('Norris')] += 25;
  }
  if (dataPoints[label.indexOf('Latifi')] < 625) {
    dataPoints[label.indexOf('Latifi')] += 25;
  }
  if (dataPoints[label.indexOf('Hulkenberg')] < 600) {
    dataPoints[label.indexOf('Hulkenberg')] += 25;
  }
  // if (dataPoints[label.indexOf('Leclerc')] < 1000) {
  //   dataPoints[label.indexOf('Leclerc')] += 25;
  // }
  // if (dataPoints[label.indexOf('Leclerc')] < 1000) {
  //   dataPoints[label.indexOf('Leclerc')] += 25;
  // }
  // if (dataPoints[label.indexOf('Leclerc')] < 1000) {
  //   dataPoints[label.indexOf('Leclerc')] += 25;
  // }

  chart.update();
}, 1000);

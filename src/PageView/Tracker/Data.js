const lineChartData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [
    {
      label: 'Workouts',
      pointBackgroundColor: '#00AAEF',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#00AAEF',
      borderColor: '#00AAEF',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointRadius: 5,
      pointHitRadius: 10,
      data: [78, 78, 78.2, 78.5, 79, 78.5, 79, 80]
    }
  ]
}

const lineStyles = {
  legend: {
    display: false
  },
  layout: {
    padding: {
      top: 70,
      left: 10,
      right: 10
    }
  },
  plugins: {
    datalabels: {
      offset: 20,
      align: 'end',
      font: {
        weight: 'bold'
      }
    },
    labels: [
      {
        render: 'label',
        position: 'outside'
      },
      {
        render: 'value'
      }
    ]
  },

  scales: {
    yAxes: [
      {
        display: false
      }
    ]
  }
}

const barChartData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'hours',
      backgroundColor: '#00AAEF',
      borderColor: '#00AAEF',
      borderWidth: 1,
      hoverBackgroundColor: '#0094d0',
      hoverBorderColor: '#0094d0',
      data: [0, 40, 20, 55, 0, 80, 30, 20]
    }
  ]
}

const barStyles = {
  legend: {
    display: false
  },
  layout: {
    padding: {
      top: 30
    }
  },

  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'top',
      font: {
        weight: 'bold'
      }
    }
  },
  scales: {
    yAxes: [
      {
        display: false
      }
    ]
  }
}

export { lineChartData, lineStyles, barStyles, barChartData };

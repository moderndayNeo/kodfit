const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [
    {
      label: 'Weight(kg)',
      backgroundColor: 'rgba(0, 0, 255)',
      borderColor: 'rgba(0, 0, 255)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0, 0, 255)',
      hoverBorderColor: 'rgba(0, 0, 255)',
      data: [65, 59, 60, 70, 66, 76, 77, 60]
    }
  ]
}

const line = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [
    {
      label: 'Workouts',
      pointBackgroundColor: 'rgba(0, 0, 255)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(0, 0, 255)',
      borderColor: 'rgba(0, 0, 255)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointRadius: 5,
      pointHitRadius: 10,
      data: [65, 59, 60, 65, 66, 66, 56, 80]
    }
  ]
}

const option = {
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
const barOption = {
  legend: {
    display: false
  },
  layout: {
    padding: {
      top: 70
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

export { line, option, barOption, data };

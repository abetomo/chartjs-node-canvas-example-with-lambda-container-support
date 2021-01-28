const { ChartJSNodeCanvas } = require('chartjs-node-canvas')

exports.lambdaHandler = async (event, context) => {
  const options = {
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      yAxes: [{ display: false }],
      xAxes: [
        {
          display: true,
          scaleLabel: { display: true, labelString: 'point' }
        }
      ]
    }
  }

  const width = 800 // px
  const height = 600 // px
  const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height })
  const params = {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          label: 'xxx',
          fill: false,
          borderColor: '#00ff3b',
          data: [1, 3, 2]
        },
        {
          label: 'yyy',
          fill: false,
          borderColor: '#ff4f02',
          data: [1.1, 4.9, 0.5]
        }
      ]
    },
    options
  }
  return await chartJSNodeCanvas.renderToDataURL(params)
}

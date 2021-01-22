const { CanvasRenderService } = require('chartjs-node-canvas')

const mime = 'image/png'
const encoding = 'base64'

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

  const renderService = new CanvasRenderService(800, 600)
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
  const buffer = await renderService.renderToBuffer(params)
  return `data:${mime};${encoding},${buffer.toString('base64')}`
}

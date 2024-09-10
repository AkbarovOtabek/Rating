<script>
import { defineComponent, ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

export default defineComponent({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    ModeisActive: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const allLabels = [
      '2022-1 квартал',
      '2022-2 квартал',
      '2022-3 квартал',
      '2022-4 квартал',
      '2023-1 квартал',
      '2023-2 квартал',
      '2023-3 квартал',
      '2023-4 квартал',
      '2024-1 квартал',
      '2024-2 квартал',
      '2024-3 квартал',
      '2024-4 квартал',
      '2025-1 квартал',
      '2025-2 квартал',
      '2025-3 квартал',
      '2025-4 квартал'
    ]

    const allData = [1, 35, 10, 25, 30, 15, 20, 35, 10, 30, 20, 25, 10, 30, 10]

    const currentYear = new Date().getFullYear()

    const last3Years = [currentYear - 2, currentYear - 1, currentYear]

    const filteredLabels = allLabels.filter((label) => {
      const year = parseInt(label.split('-')[0])
      return last3Years.includes(year)
    })

    const firstIndex = allLabels.findIndex((label) =>
      last3Years.includes(parseInt(label.split('-')[0]))
    )

    const filteredData = allData.slice(firstIndex, firstIndex + filteredLabels.length)

    const chartData = ref({
      labels: filteredLabels,
      datasets: [
        {
          label: '',
          backgroundColor: props.ModeisActive
            ? 'rgba(255, 255, 255, 0.2)'
            : 'rgba(54, 162, 235, 0.2)',
          borderColor: props.ModeisActive ? rgba(255, 255, 255, 0.2) : 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          data: filteredData
        }
      ]
    })

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'год и кварталы'
          }
        },
        y: {
          min: 0,
          max: 35,
          reverse: true,
          title: {
            display: true,
            text: 'Место в рейтинге'
          },
          ticks: {
            stepSize: 5,
            callback: function (value) {
              return value % 2 === 0 ? value : ''
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      animation: false
    }

    return {
      chartData,
      chartOptions
    }
  }
})
</script>

<template>
  <div class="chart-scroll-container">
    <div class="chart-container">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<style scoped>
.chart-scroll-container {
  white-space: nowrap;
  width: 100%;
}

.chart-container {
  width: 100%;
  height: 390px;
  position: relative;
}

.chart-container canvas {
  width: 100%;
  height: 100%;
}
</style>

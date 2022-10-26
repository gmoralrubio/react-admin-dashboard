import Card from './common/Card'
import { hexToRgbA } from '../utils'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import colors from 'tailwindcss/colors'
import CardTitle from './common/CardTitle'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export default function Chart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June']

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: colors.indigo[600],
        backgroundColor: hexToRgbA(colors.indigo[300], 0.5),
      },
    ],
  }

  return (
    <Card className="w-8/12">
      <CardTitle>Last 6 months (spending)</CardTitle>
      <div className="flex justify-between">
        <span className="tracking-wide text-gray-400"></span>
      </div>
      <div className="pt-4">
        <Line options={options} data={data} className="h-[325px]" />
      </div>
    </Card>
  )
}

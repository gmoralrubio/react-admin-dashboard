import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import colors from 'tailwindcss/colors'
import { MdMoreVert } from 'react-icons/md'
import { formatCurrency } from '../utils'
import Card from './common/Card'
import FeaturedItem from './FeaturedItem'
import CardTitle from './common/CardTitle'

export default function Featured() {
  const percentage = 60
  const amount = 2543
  const value = 12000

  const items = [
    {
      title: 'Target',
      value: -1200,
    },
    {
      title: 'Last week',
      value: 1200,
    },
    {
      title: 'Last month',
      value: -1200,
    },
  ]

  return (
    <Card className=" flex w-4/12 flex-col gap-6">
      <div className="flex justify-between">
        <CardTitle>Total Revenue</CardTitle>
        <MdMoreVert size={24} color={colors.gray[400]} />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-28">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: colors.indigo[500],
              textColor: colors.indigo[600],
              trailColor: colors.gray[300],
              strokeWidth: 2,
            })}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-light">Total sales made today</span>
        <span className="text-3xl font-light">{formatCurrency(amount, 2)}</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-center text-xs text-gray-600 dark:text-gray-400">
          Previous transactions processing. <br /> Last payments may not be included.
        </span>
        <div className="flex">
          {items.map((item, idx) => (
            <FeaturedItem item={item} key={idx} />
          ))}
        </div>
      </div>
    </Card>
  )
}

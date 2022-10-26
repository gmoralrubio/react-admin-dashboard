import {
  MdKeyboardArrowUp,
  MdOutlineShoppingCart,
  MdEuro,
  MdOutlineAccountBalanceWallet,
  MdClose,
} from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import colors from 'tailwindcss/colors'
import { WIDGET_TYPES } from '../config'
import { formatCurrency, formatNumber } from '../utils'
import Card from './common/Card'

export default function Widget({ type }) {
  let variants

  const amount = 12334
  const diff = 20

  switch (type) {
    case WIDGET_TYPES.USERS:
      variants = {
        title: 'Users',
        link: 'See all users',
        bgColor: 'bg-red-200',
        icon: <FiUsers size={16} color={colors.red[600]} />,
      }
      break
    case WIDGET_TYPES.ORDERS:
      variants = {
        title: 'Orders',
        link: 'See all orders',
        bgColor: 'bg-yellow-200',
        icon: <MdOutlineShoppingCart size={16} color={colors.yellow[600]} />,
      }
      break
    case WIDGET_TYPES.EARNINGS:
      variants = {
        title: 'Earnings',
        link: 'View net earnings',
        bgColor: 'bg-emerald-200',
        icon: <MdEuro size={16} color={colors.emerald[600]} />,
      }
      break
    case WIDGET_TYPES.BALANCE:
      variants = {
        title: 'Balance',
        link: 'See details',
        bgColor: 'bg-violet-200',
        icon: <MdOutlineAccountBalanceWallet size={16} color={colors.violet[600]} />,
      }
      break

    default:
      variants = {
        title: 'No widget type',
        link: 'No widget type',
        bgColor: 'bg-red-200',
        icon: <MdClose size={16} color={colors.red[600]} />,
      }
      break
  }
  return (
    <Card className="flex h-40 flex-1 justify-between ">
      <div className="flex flex-col justify-between">
        <span className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          {variants.title}
        </span>
        <span className="text-3xl font-light">
          {type === WIDGET_TYPES.EARNINGS || type === WIDGET_TYPES.BALANCE
            ? formatCurrency(amount)
            : formatNumber(amount)}
        </span>
        <span className="text-sm leading-none underline">{variants.link}</span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="flex items-center gap-1">
          <MdKeyboardArrowUp size={24} color={colors.green[600]} />
          <span className="font-semibold text-green-600">{diff}%</span>
        </div>
        <div className={`${variants.bgColor} rounded p-2`}>{variants.icon}</div>
      </div>
    </Card>
  )
}

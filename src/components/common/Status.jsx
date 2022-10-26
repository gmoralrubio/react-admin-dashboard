import { TRANSACTION_STATUS, USER_STATUS } from '../../config'

export default function Status({ children, status }) {
  let statusStyle
  switch (status) {
    case TRANSACTION_STATUS.APROVED:
      statusStyle = 'bg-blue-200 text-blue-700'
      break
    case TRANSACTION_STATUS.PENDING:
      statusStyle = 'bg-yellow-200 text-yellow-700'
      break
    case TRANSACTION_STATUS.SUCCESS:
      statusStyle = 'bg-green-200 text-green-700'
      break
    case TRANSACTION_STATUS.CANCELLED:
      statusStyle = 'bg-red-200 text-red-700'
      break
    case USER_STATUS.ACTIVE:
      statusStyle = 'bg-green-200 text-green-700'
      break
    case USER_STATUS.PENDING:
      statusStyle = 'bg-yellow-200 text-yellow-700'
      break
    case USER_STATUS.PASSIVE:
      statusStyle = 'bg-red-200 text-red-700'
      break
    default:
      statusStyle = 'bg-grey-200 text-grey-700'
      break
  }
  return (
    <span
      className={`flex w-24 justify-center rounded px-2 py-1 font-bold capitalize ${statusStyle}`}
    >
      {children}
    </span>
  )
}

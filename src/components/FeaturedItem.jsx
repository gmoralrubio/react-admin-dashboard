import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import colors from 'tailwindcss/colors'
import { formatCurrency } from '../utils'

export default function FeaturedItem({ item }) {
  return (
    <div className="flex w-1/3 flex-col items-center">
      <span className="font-light">{item.title}</span>
      <div className="flex items-center">
        {item.value > 0 ? (
          <MdKeyboardArrowUp
            size={20}
            color={item.value > 0 ? colors.green[600] : colors.red[600]}
          />
        ) : (
          <MdKeyboardArrowDown
            size={20}
            color={item.value > 0 ? colors.green[600] : colors.red[600]}
          />
        )}
        <span className={`${item.value > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {formatCurrency(item.value, 0)}
        </span>
      </div>
    </div>
  )
}

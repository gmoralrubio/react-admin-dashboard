import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { MdMoreVert } from 'react-icons/md'
import colors from 'tailwindcss/colors'
import Card from './Card'
export default function Featured() {
  return (
    <Card className="w-8/12">
      <div className="flex justify-between">
        <span className="tracking-wide text-gray-400">Total Revenue</span>
        <MdMoreVert size={24} color={colors.gray[400]} />
      </div>
      <div>
        <CircularProgressbar />
      </div>
    </Card>
  )
}

import React from 'react'

import Sidebar from './../components/Sidebar'
import Navbar from './../components/Navbar'
import Widget from '../components/Widget'
import { WIDGET_TYPES } from '../config'
import Chart from '../components/Chart'
import Featured from '../components/Featured'
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        <Navbar />
        {/* widgets */}
        <div className="flex gap-6 p-4">
          <Widget type={WIDGET_TYPES.USERS} />
          <Widget type={WIDGET_TYPES.ORDERS} />
          <Widget type={WIDGET_TYPES.EARNINGS} />
          <Widget type={WIDGET_TYPES.BALANCE} />
        </div>
        <div className="flex gap-6 p-4">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  )
}

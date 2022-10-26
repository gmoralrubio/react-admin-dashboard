import Sidebar from './../components/Sidebar'
import Navbar from './../components/Navbar'
import Widget from '../components/Widget'
import { WIDGET_TYPES } from '../config'
import Chart from '../components/Chart'
import Featured from '../components/Featured'
import CustomTable from '../components/CustomTable'

export default function Home() {
  return (
    <div className="flex dark:bg-gray-900">
      <Sidebar />
      <div className="w-5/6">
        <Navbar />
        <div className="flex flex-col gap-4 px-4 pt-4">
          <div className="flex gap-4">
            <Widget type={WIDGET_TYPES.USERS} />
            <Widget type={WIDGET_TYPES.ORDERS} />
            <Widget type={WIDGET_TYPES.EARNINGS} />
            <Widget type={WIDGET_TYPES.BALANCE} />
          </div>
          <div className="flex gap-4">
            <Featured />
            <Chart />
          </div>
          <div className="flex gap-4">
            <CustomTable />
          </div>
        </div>
      </div>
    </div>
  )
}

import DataTable from '../components/DataTable'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function List() {
  return (
    <div className="flex dark:bg-gray-700">
      <Sidebar />
      <div className="w-5/6">
        <Navbar />
        <div className="flex flex-col gap-4 px-4 pt-4">
          <DataTable />
        </div>
      </div>
    </div>
  )
}

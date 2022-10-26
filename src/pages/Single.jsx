import Sidebar from './../components/Sidebar'
import Navbar from './../components/Navbar'
import CardTitle from './../components/common/CardTitle'
import Chart from './../components/Chart'
import Card from '../components/common/Card'
import CustomTable from './../components/CustomTable'
import { faker } from '@faker-js/faker'
import { MdAlternateEmail, MdOutlinePhone, MdOutlinePinDrop } from 'react-icons/md'
import colors from 'tailwindcss/colors'

export default function Single() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        <Navbar />
        <div className="flex flex-col gap-4 px-4 pt-4">
          <div className="flex gap-4">
            <Card className="w-4/12">
              <div className="flex justify-between">
                <CardTitle>Information</CardTitle>
                <button className="rounded bg-indigo-200 px-2 py-1 text-sm font-semibold text-indigo-600">
                  Edit
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-6">
                  <img src={faker.image.avatar()} alt="" className="rounded-full" />
                  <span className="text-3xl font-bold">{faker.name.fullName()}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="flex gap-2">
                    <MdAlternateEmail size={24} color={colors.indigo[300]} />
                    <span>{faker.internet.email()}</span>
                  </span>
                  <span className="flex gap-2">
                    <MdOutlinePhone size={24} color={colors.indigo[300]} />
                    <span>{faker.phone.number('+34 6## ### ### ')}</span>
                  </span>
                  <span className="flex gap-2">
                    <MdOutlinePinDrop size={24} color={colors.indigo[300]} />
                    <span>
                      {faker.address.streetAddress()}, {faker.address.country()}
                    </span>
                  </span>
                </div>
              </div>
            </Card>
            <Chart className="w-8/12" />
          </div>
          <CustomTable />
        </div>
      </div>
    </div>
  )
}

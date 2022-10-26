import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from './../components/common/Card'
import CardTitle from './../components/common/CardTitle'
import { IoImageOutline } from 'react-icons/io5'
import colors from 'tailwindcss/colors'
import { MdOutlineFileUpload } from 'react-icons/md'
import { useState } from 'react'
import Button from './../components/common/Button'

export default function New({ inputs, title, subtitle }) {
  const [file, setFile] = useState('')
  console.log(file)
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        <Navbar />
        <div className="flex flex-col gap-4 px-4 pt-4">
          <Card>
            <CardTitle>{title}</CardTitle>
            <div className="mt-4 flex divide-x px-4">
              <div className="flex w-4/12 flex-col items-center justify-center">
                {file ? (
                  <div>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="h-56 w-56 rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-full bg-gray-200">
                    <IoImageOutline size={40} color={colors.gray[400]} />
                    <span className="font-semibold text-gray-400">No image</span>
                  </div>
                )}

                <div className="mt-4">
                  <input
                    className="hidden"
                    type="file"
                    id="file"
                    onChange={e => setFile(e.target.files[0])}
                  />
                  <label
                    htmlFor="file"
                    className="flex cursor-pointer items-center gap-2 hover:underline"
                  >
                    <MdOutlineFileUpload size={28} color={colors.indigo[300]} />
                    <span>Upload an image</span>
                  </label>
                </div>
              </div>
              <div className="w-8/12 px-4">
                <h2 className="mb-4 text-2xl font-light text-gray-600">{subtitle}</h2>
                <form className="grid grid-cols-2 gap-4">
                  {inputs.map((input, idx) => (
                    <input
                      key={idx}
                      type={input.type}
                      className="w-full rounded-md border-gray-300"
                      placeholder={input.placeholder}
                    />
                  ))}
                  <div className="col-span-full">
                    <Button text={'Submit'} type={'submit'} size={'md'} />
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

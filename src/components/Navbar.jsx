import React from 'react'

import { MdSearch } from 'react-icons/md'
import {
  MdLanguage,
  MdOutlineDarkMode,
  MdFullscreenExit,
  MdNotificationsNone,
  MdChatBubbleOutline,
  MdOutlineList,
} from 'react-icons/md'
import colors from 'tailwindcss/colors'
export default function Navbar() {
  return (
    <div className="border-b bg-white p-4 ">
      <div className="flex h-12 items-center gap-4">
        <div className=" flex w-1/2 items-center border-b bg-gray-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-0 border-b-gray-300 bg-gray-50"
          />
          <button className=" px-4">
            <MdSearch size={24} color={colors.indigo[600]} />
          </button>
        </div>

        <div className="flex w-1/2 items-center justify-end gap-6">
          <div className="flex gap-1">
            <MdLanguage size={24} color={colors.gray[500]} />
            <span className="text-gray-500">English</span>
          </div>
          <div>
            <MdOutlineDarkMode size={24} color={colors.gray[500]} />
          </div>
          <div>
            <MdFullscreenExit size={24} color={colors.gray[500]} />
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              1
            </div>
            <MdNotificationsNone size={24} color={colors.gray[500]} />
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              2
            </div>
            <MdChatBubbleOutline size={24} color={colors.gray[500]} />
          </div>
          <div>
            <MdOutlineList size={24} color={colors.gray[500]} />
          </div>
        </div>
        <div>
          <img src="https://picsum.photos/200" alt="" className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}

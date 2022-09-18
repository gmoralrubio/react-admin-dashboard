import React from 'react'

import {
  MdOutlineSpaceDashboard,
  MdOutlineShoppingCart,
  MdOutlineNotificationsNone,
  MdOutlineHealthAndSafety,
  MdOutlineSettings,
  MdLogout,
  MdGrading,
  MdOutlineDarkMode,
  MdOutlineWbSunny,
} from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { TbTruckDelivery } from 'react-icons/tb'
import { IoIosStats } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'

import colors from 'tailwindcss/colors'
import { Switch } from '@headlessui/react'
import { useState } from 'react'

export default function Sidebar() {
  const menuItems = {
    main: {
      title: 'Main',
      elements: [
        {
          title: 'Dashboard',
          icon: <MdOutlineSpaceDashboard size={24} color={colors.indigo[400]} />,
        },
      ],
    },
    lists: {
      title: 'Lists',
      elements: [
        {
          title: 'Users',
          icon: <FiUsers size={24} color={colors.indigo[400]} />,
        },
        {
          title: 'Products',
          icon: <MdOutlineShoppingCart size={24} color={colors.indigo[400]} />,
        },
        {
          title: 'Orders',
          icon: <HiOutlineDocumentDuplicate size={24} color={colors.indigo[400]} />,
        },
        {
          title: 'Delivery',
          icon: <TbTruckDelivery size={24} color={colors.indigo[400]} />,
        },
      ],
    },
    useful: {
      title: 'Useful',
      elements: [
        {
          title: 'Stats',
          icon: <IoIosStats size={24} color={colors.indigo[400]} />,
        },
        {
          title: 'Notifications',
          icon: <MdOutlineNotificationsNone size={24} color={colors.indigo[400]} />,
        },
      ],
    },
    service: {
      title: 'Service',
      elements: [
        {
          title: 'System Health',
          icon: <MdOutlineHealthAndSafety size={24} color={colors.indigo[400]} />,
        },
        {
          title: 'Logs',
          icon: <MdGrading size={24} color={colors.indigo[400]} />,
        },
        {
          title: 'Settings',
          icon: <MdOutlineSettings size={24} color={colors.indigo[400]} />,
        },
      ],
    },
    user: {
      title: 'User',
      elements: [
        {
          title: 'Profile',
          icon: <CgProfile size={24} color={colors.indigo[400]} />,
        },
        {
          title: 'Logout',
          icon: <MdLogout size={24} color={colors.indigo[400]} />,
        },
      ],
    },
  }

  return (
    <div className="min-h-screen w-1/6 border-r border-r-gray-200 bg-white ">
      <div className="flex h-[81px] items-center justify-center border-b border-b-gray-200 p-4 pb-4">
        <h1 className="text-2xl font-bold text-indigo-500">Admin panel</h1>
      </div>

      <ul className="px-4">
        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          {menuItems.main.title}
        </p>
        {menuItems.main.elements.map((item, idx) => (
          <li
            className="flex cursor-pointer items-center gap-2 py-2 hover:bg-indigo-50"
            key={idx}
          >
            {item.icon}
            <span className="text-md font-light">{item.title}</span>
          </li>
        ))}
        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          {menuItems.lists.title}
        </p>
        {menuItems.lists.elements.map((item, idx) => (
          <li
            className="flex cursor-pointer items-center gap-2 py-2 hover:bg-indigo-50"
            key={idx}
          >
            {item.icon}
            <span className="text-md font-light">{item.title}</span>
          </li>
        ))}

        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          {menuItems.useful.title}
        </p>
        {menuItems.useful.elements.map((item, idx) => (
          <li
            className="flex cursor-pointer items-center gap-2 py-2 hover:bg-indigo-50"
            key={idx}
          >
            {item.icon}
            <span className="text-md font-light">{item.title}</span>
          </li>
        ))}

        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          {menuItems.service.title}
        </p>
        {menuItems.service.elements.map((item, idx) => (
          <li
            className="flex cursor-pointer items-center gap-2 py-2 hover:bg-indigo-50"
            key={idx}
          >
            {item.icon}
            <span className="text-md font-light">{item.title}</span>
          </li>
        ))}

        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          {menuItems.user.title}
        </p>
        {menuItems.user.elements.map((item, idx) => (
          <li
            className="flex cursor-pointer items-center gap-2 py-2 hover:bg-indigo-50"
            key={idx}
          >
            {item.icon}
            <span className="text-md font-light">{item.title}</span>
          </li>
        ))}
      </ul>

      <div className="px-4">
        <p className="mb-2 pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Dark Mode
        </p>
        <DarkMode />
      </div>
    </div>
  )
}

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <Switch
      checked={isDarkMode}
      onChange={setIsDarkMode}
      className={`${
        isDarkMode ? 'bg-stone-800' : 'bg-yellow-400'
      } relative inline-flex h-9 w-16 items-center rounded-full`}
    >
      <span
        className={`${
          isDarkMode ? 'translate-x-8' : 'translate-x-1'
        }  flex h-7 w-7 transform items-center justify-center rounded-full bg-white transition`}
      >
        {isDarkMode ? (
          <MdOutlineDarkMode color={colors.stone[800]} />
        ) : (
          <MdOutlineWbSunny color={colors.yellow[700]} />
        )}
      </span>
    </Switch>
  )
}

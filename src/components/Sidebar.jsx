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
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

export default function Sidebar() {
  return (
    <div className="min-h-screen w-1/6 border-r border-r-gray-200 bg-white dark:border-r-gray-600 dark:bg-gray-800">
      <div className="flex h-[81px] items-center justify-center border-b border-b-gray-200 p-4 pb-4 dark:border-b-gray-600">
        <h1 className="text-2xl font-bold text-indigo-500 dark:text-indigo-50">
          <Link to="/">Admin panel</Link>
        </h1>
      </div>

      <ul className="px-4">
        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-200">
          Main
        </p>
        <Link to="/">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <MdOutlineSpaceDashboard size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Dashboard</span>
          </li>
        </Link>

        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-200">
          Lists
        </p>
        <Link to="/users">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <FiUsers size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Users</span>
          </li>
        </Link>
        <Link to="/products">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <MdOutlineShoppingCart size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Products</span>
          </li>
        </Link>
        <Link to="/orders">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <HiOutlineDocumentDuplicate size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Orders</span>
          </li>
        </Link>
        <Link to="/delivery">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <TbTruckDelivery size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Delivery</span>
          </li>
        </Link>

        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-200">
          Useful
        </p>
        <Link to="/stats">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <IoIosStats size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Stats</span>
          </li>
        </Link>
        <Link to="/notifications">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <MdOutlineNotificationsNone size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Notifications</span>
          </li>
        </Link>

        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-200">
          Service
        </p>
        <Link to="/">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <MdOutlineHealthAndSafety size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">System Health</span>
          </li>
        </Link>
        <Link to="/">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <MdGrading size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Logs</span>
          </li>
        </Link>
        <Link to="/">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <MdOutlineSettings size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Settings</span>
          </li>
        </Link>

        <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-200">
          User
        </p>
        <Link to="/">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <CgProfile size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Profile</span>
          </li>
        </Link>
        <Link to="/">
          <li className="flex cursor-pointer items-center gap-2 py-2 pl-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/70">
            <MdLogout size={24} color={colors.indigo[400]} />
            <span className="text-md font-light dark:text-white">Logout</span>
          </li>
        </Link>
      </ul>

      <div className="px-4">
        <p className="mb-2 pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-200">
          Dark Mode
        </p>
        <DarkMode />
      </div>
    </div>
  )
}

function DarkMode() {
  const { isDark, setIsDark } = useContext(ThemeContext)
  return (
    <Switch
      checked={isDark}
      onChange={setIsDark}
      className={`${
        isDark ? 'border border-stone-600 bg-stone-800' : 'bg-yellow-400'
      } relative inline-flex h-9 w-16 items-center rounded-full`}
    >
      <span
        className={`${
          isDark ? 'translate-x-8' : 'translate-x-1'
        }  flex h-7 w-7 transform items-center justify-center rounded-full bg-white transition`}
      >
        {isDark ? (
          <MdOutlineDarkMode color={colors.stone[800]} />
        ) : (
          <MdOutlineWbSunny color={colors.yellow[700]} />
        )}
      </span>
    </Switch>
  )
}

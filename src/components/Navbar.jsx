import { useContext } from 'react'
import { MdSearch } from 'react-icons/md'
import {
  MdLanguage,
  MdOutlineDarkMode,
  MdFullscreenExit,
  MdNotificationsNone,
  MdChatBubbleOutline,
  MdOutlineList,
  MdOutlineWbSunny,
} from 'react-icons/md'
import colors from 'tailwindcss/colors'
import { ThemeContext } from './../context/ThemeContext'

export default function Navbar() {
  const { isDark, setIsDark } = useContext(ThemeContext)
  return (
    <div className="border-b bg-white p-4 dark:border-b-gray-600 dark:bg-gray-800">
      <div className="flex h-12 items-center gap-4">
        <div className=" flex w-1/2 items-center border-b bg-gray-50 dark:border-b-gray-500 dark:bg-gray-700">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-0 border-b-gray-300 bg-gray-50  dark:bg-gray-700"
          />
          <button className="px-4 ">
            <MdSearch
              size={24}
              color={isDark ? colors.indigo[100] : colors.indigo[600]}
            />
          </button>
        </div>

        <div className="flex w-1/2 items-center justify-end gap-6">
          <div className="flex gap-1">
            <MdLanguage size={24} color={isDark ? colors.gray[300] : colors.gray[500]} />
            <span className="text-gray-500 dark:text-gray-300">English</span>
          </div>
          <div>
            {isDark ? (
              <MdOutlineDarkMode
                size={24}
                color={isDark ? colors.gray[300] : colors.gray[500]}
                onClick={() => setIsDark(prev => !prev)}
              />
            ) : (
              <MdOutlineWbSunny
                size={24}
                color={isDark ? colors.gray[300] : colors.gray[500]}
                onClick={() => setIsDark(prev => !prev)}
              />
            )}
          </div>
          <div>
            <MdFullscreenExit
              size={24}
              color={isDark ? colors.gray[300] : colors.gray[500]}
            />
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              1
            </div>
            <MdNotificationsNone
              size={24}
              color={isDark ? colors.gray[300] : colors.gray[500]}
            />
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              2
            </div>
            <MdChatBubbleOutline
              size={24}
              color={isDark ? colors.gray[300] : colors.gray[500]}
            />
          </div>
          <div>
            <MdOutlineList
              size={24}
              color={isDark ? colors.gray[300] : colors.gray[500]}
            />
          </div>
        </div>
        <div className="flex w-10 ">
          <img src="https://picsum.photos/32" alt="" className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

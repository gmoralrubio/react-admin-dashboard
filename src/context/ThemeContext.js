import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext('')

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

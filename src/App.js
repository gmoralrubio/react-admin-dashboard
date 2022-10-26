import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import List from './pages/List'
import New from './pages/New'
import Single from './pages/Single'
import NotFound from './pages/NotFound'
import { ThemeContext } from './context/ThemeContext'
import { productInputs, userInputs } from './formSource.js'
import { useContext } from 'react'

function App() {
  const { isDark } = useContext(ThemeContext)
  return (
    <div className={isDark ? 'dark' : ''}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={userInputs}
                    title={'Add new user'}
                    subtitle={'User information'}
                  />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={productInputs}
                    title={'Add new product'}
                    subtitle={'Product information'}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/pages/Login'
import Main from './components/pages/Main'
import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Main />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

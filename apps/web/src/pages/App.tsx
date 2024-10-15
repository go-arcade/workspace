import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import DefaultLayouts from '@/components/Layouts/default'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route element={<Dashboard />} index path='/' />
            <Route element={<Login />} path='/login' />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className='go-arcade-total' />
    </>
  )
}

export default App

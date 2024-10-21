import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthGuard from '@/components/Layouts/AuthGuard'
import DefaultLayouts from '@/components/Layouts/default'
import Login from './Login'
import Dashboard from './Dashboard'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route element={<AuthGuard />}>
              <Route element={<Dashboard />} index path='/' />
            </Route>
            <Route element={<Login />} path='/login' />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className='arcade-total' />
    </>
  )
}

export default App

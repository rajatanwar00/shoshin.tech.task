import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './components/Dashboard/Dashboard'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Dashboard/>} />
      </Route>
    </Route>     
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
  children:[
  {
    path: "",
    element: <Home />

  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "services",
    element: <Services />
  }
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)

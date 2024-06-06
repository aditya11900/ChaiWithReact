import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider , createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import {Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'

// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <Layout />,
//   children:[
//   {
//     path: "",
//     element: <Home />

//   },
//   {
//     path: "about",
//     element: <About />
//   },
//   {
//     path: "services",
//     element: <Services />
//   }
// ]
// }
// ])
// there is a one more way 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import index from './components/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { AllPosts, AuthLayout } from './components/index.js'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
 { path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element:(<AuthLayout authenication={false}>
        <Login />
      </AuthLayout>
      ),
    },
    {
      path: '/signup',
      element:(<AuthLayout authenication={false}>
        <Signup />
      </AuthLayout>
      ),
    },
    {
      path: '/all-post',
      element:(<AuthLayout authenication>
        {""}
        <AllPosts />
      </AuthLayout>),
    },
    {
      path: '/add-post',
      element:(<AuthLayout authenication>
        {""}
        <AddPost />
      </AuthLayout>),
    },
    {
      path: '/edit-post/:slug',
      element:(<AuthLayout authenication>
        {""}
        <EditPost />
      </AuthLayout>),
    },
    {
      path: '/post/:slug',
      element: <Post />,
    },
  ]
 },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

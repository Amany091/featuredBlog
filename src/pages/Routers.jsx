import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutPage from './LayoutPage'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import BlogDetails from './blogDetails'
const routers = createBrowserRouter([
  {
    path: '/', element: <LayoutPage />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/blog', element: <BlogPage /> },
      {path: '/blog/:slug', element:<BlogDetails/>}
   ]
  }
])

const Routes = () => {
  return <RouterProvider router={routers} />
  
}

export default Routes

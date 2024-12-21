import React from 'react'
import { createBrowserRouter, Routes } from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
]);

export default router
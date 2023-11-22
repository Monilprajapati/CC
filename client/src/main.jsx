import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import App from './App.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css'
import Home from '@mui/icons-material/Home.js';
import ExploreJobs from './components/ExploreJobs.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUS from './components/ContactUs.jsx'
import { ClassNames } from '@emotion/react';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="home" element={<Home />} />
    <Route path="jobs" element={<ExploreJobs />} />
    <Route path="programs" element={<div className='text-center text-4xl'>Coming Soon</div>} />
    <Route path="about" element={<AboutUs />} />
    <Route path="contact" element={<ContactUS/>} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

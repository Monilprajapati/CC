import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";

import Home from '@mui/icons-material/Home.js';
import ExploreJobs from './components/ExploreJobs.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUS from './components/ContactUs.jsx';
import { ClassNames } from '@emotion/react';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="jobs" element={<ExploreJobs />} />
      <Route path="programs" element={<div className='text-center text-4xl'>Coming Soon</div>} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUS/>} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
    </Route>
    )
  )

//   <RouterProvider router={router} />/

export const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
}
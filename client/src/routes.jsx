// import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './components/Home'
import ExploreJobs from './components/ExploreJobs'
import AboutUs from './components/AboutUs'
import ContactUS from './components/ContactUs'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<ExploreJobs />} />
            <Route path="/programs" element={<div className="text-center text-4xl"> soon</div>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Route>
    )
)

export const Routes = () => {
    return <RouterProvider router={router}/>
}
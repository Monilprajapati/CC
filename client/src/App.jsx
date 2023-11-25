// import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Categories from './components/Categories';
import NewsLetter from './components/NewsLetter';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes } from './routes';


const theme = createTheme({
  palette: {  
    primary: {
      main: '#2196F3', // Set your primary color
    },
    secondary: {
      main: '#FFFFFF', // Set your secondary color
    },
  },
  typography: {
    fontFamily: [
      'Lato', 'Helvetica', 'Arial', "sans - serif",
      'Montserrat', 'Helvetica', 'Arial', "sans - serif",
    ].join(','),
  }
});

const App = () => {
  return (
    <>

      <ThemeProvider theme={theme}>

        <Navbar />
        <Home/>
        <Categories/>
        <NewsLetter/>
        {/* <Routes /> */}
        {/* <Router>
          <Routes>
            <Route Component={Home} path='/'></Route>
            {/* <Route Component={Home} path='/'></Route> */}
        {/* </Routes> */}
        {/* </Router> */} 
      </ThemeProvider>
    </>
  )
}

export default App
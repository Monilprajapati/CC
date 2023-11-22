import { React, useState } from 'react'
import {
  AppBar,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import Home from '@mui/icons-material/Home';
import ExploreJobs from './ExploreJobs';
import AboutUs from './AboutUs';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const fontStyle = {
    fontSize: "15px",
  }

  return (
    <>
      <AppBar sx={{fontFamily:"Montserrat"}} position='static'>
        <Toolbar sx={{padding:"15px 0"}}>
          <Typography sx={{ fontSize: "2rem", fontWeight:500, marginLeft:{xs:"13px", sm:"0"} } }>Udyog Sarthi</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="secondary.main"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab  label="Home" sx={fontStyle} component ={NavLink} to='/home' />
                <Tab label="Jobs" sx={fontStyle}  component={NavLink} to='/jobs' />
                <Tab label="Programs" sx={fontStyle} component={NavLink} to='/prograams' />
                <Tab label="About Us" sx={fontStyle} component={NavLink} to='/about'/>
                <Tab label="Contact" sx={fontStyle} component={NavLink} to='/contact'/>
              </Tabs>
              <Button sx={{ marginLeft: "auto", color:"white", fontSize:"16px" }} color='inherit' variant="outlined" component = {NavLink} to='/login'> 
                Login
              </Button>
              <Button sx={{ marginLeft: "20px", borderColor:"white", fontSize:"16px" }} variant="contained" component={NavLink} to='/signup'>
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar

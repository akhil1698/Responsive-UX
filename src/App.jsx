// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Components/Header'
// import Footer from './Components/Footer'
// import Box from '@mui/material/Box'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//         {/* <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> */}
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

//     <Header/>
//     <Box flexGrow={1}></Box>
//     <Footer/>
//     </Box>
//     {/* </Box> */}
//     </>
//   )
// }

// export default App

import React from "react";
import Layout from "./Components/MainContent";
import { Typography, Box, Toolbar } from "@mui/material";
import TestCards from "./Components/TestCards";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import './App.css'

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* <BrowserRouter> */}
      <HashRouter>
        {/* Components*/}
        <Routes>
          <Route path="/" element={<Login />} />

          {/* <Route path="/" element={<TestCards />}></Route> */}
          <Route path="/layout" element={<Layout />}>
            <Route path="cards" element={<TestCards />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
        </Routes>
        {/* to simulate scroll*/}
        {/* <Box sx={{ height: "200vh" }} />  */}
        {/* to simulate scroll */}
        {/* </Box> */}
      </HashRouter>
      {/* </BrowserRouter> */}
    </Box>
  );
}

export default App;

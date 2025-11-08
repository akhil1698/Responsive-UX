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

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      {/* Add toolbar spacer to offset fixed header height */}
      <Toolbar />
      <MainContent>
        {/* Components*/}
        <TestCards />
        {/* to simulate scroll*/}
        <Box sx={{ height: "200vh" }} /> {/* to simulate scroll */}
        {/* </Box> */}
      </MainContent>

      <Footer />
    </Box>
  );
}

export default App;

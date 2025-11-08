// import React from 'react'
// import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper'

// function Footer() {
//   return (
//     // <Box   
//     // component={"footer"}
//     // sx={{
//     //     py: 3,
//     //     px: 2,
//     //     mt: 'auto', // Pushes the footer to the bottom
//     //     backgroundColor: "black",
//     //     textAlign: 'center',
//     //     position: 'sticky',
//     //     bottom:0
//     //   }}>
//         <Paper elevation={4} style={{bottom: 0,}}>

//         </Paper>

//     // </Box>
//   )
// }

// export default Footer

import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 2,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;

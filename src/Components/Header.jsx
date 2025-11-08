// import React from 'react'
// import AppBar from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'

// function Header() {
//   return (
//       <AppBar position="fixed" color="primary">
//         <Toolbar>
//           <Typography variant="h6">
            
//           </Typography>
//         </Toolbar>
//       </AppBar>
//   )
// }

// export default Header

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          My Responsive App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

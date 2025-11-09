import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import React, { useState } from "react";
import login_tree from "../../../public/Images/login_tree.jpg";
import SignUp from "../SignUp/SignUp";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const signUpHandler = () => {
    setIsSignUp(true);
  };
  return (
    <>
      {isSignUp ? <SignUp/> : (
        <Box
          sx={{
            backgroundImage: `url(${login_tree})`,
            backgroundSize: "cover",
            margin: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              width: "30%",
              height: "50%",
              "@media screen and (max-width: 992px)": {
                width: "40%",
              },
              "@media screen and (max-width: 600px)": {
                width: "75%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "500px",
                maxWidth: "100%",
                p: "20px",
                flexDirection: "column",
                gap: "32px",
                "@media screen and (max-width: 992px)": {},
                "@media screen and (max-width: 768px)": {
                  gap: "8px",
                  maxWidth: "60%",
                },
                "@media screen and (max-width: 600px)": {
                  gap: "8px",
                  maxWidth: "50%",
                },
              }}
            >
              <Typography textAlign="center" variant="h5">
                Sign in to your account
              </Typography>
              <TextField placeholder="Username"></TextField>
              {/* <TextField label="Password" ></TextField> */}
              <OutlinedInput
                id="outlined-adornment-password"
                type={"password"}
                placeholder="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={"display the password"}
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      // onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      <Visibility />
                      {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <Button variant="contained">Sign In</Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  top: "10px",
                }}
              >
                <Link> Forgot password</Link>
                <Link component="button" onClick={signUpHandler}>
                  Sign up
                </Link>
              </Box>
            </Box>
            {/* <Input>Name</Input> */}
          </Box>
        </Box>
      )}
    </>
  );
}

export default Login;

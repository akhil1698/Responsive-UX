import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import login_tree from "../../../public/Images/login_tree.jpg";
import Login from "../Login/Login";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUp() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const signInHandler = () => {
    setIsSignIn(true);
  };
  return (
    <>
      {isSignIn ? (
        <Login />
      ) : (
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
              //   justifyContent: "center",
              backgroundColor: "white",
              width: "30%",
              //   height: "50%",
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
                Sign up to your account
              </Typography>
              <TextField placeholder="First name"></TextField>
              <TextField placeholder="Last name"></TextField>
              <TextField placeholder="email"></TextField>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChangePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "hide password" : "show password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      // onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {/* <Visibility /> */}
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {/* <TextField label="Password" ></TextField> */}
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={handleChangePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "hide password" : "show password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      // onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {/* <Visibility /> */}
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
              <Button variant="contained">Sign Up</Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  top: "10px",
                }}
              >
                <Link sx={{ ml: "auto" }} onClick={signInHandler}>
                  Sign In
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

export default SignUp;

import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { postData } from "../../util/index";
import { useAuth } from "../../context/AuthContext";

const URL = `${import.meta.env.VITE_APP_API_URL}/api/v1/auth/login`;

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };
  const handleLoginPassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 8 ||
      passwordInput.length > 15
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setSuccess();

    if (emailError || !emailInput) {
      setFormValid("Email is inValid.Please enter valid Email");

      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid(
        "Password should be in 8-15 characters.Please Re-Enter Password"
      );
      setFormValid("Please enter Password");
      return;
    }
    setFormValid(null);

    const requestBody = {
      email: emailInput,
      password: passwordInput,
    };
    loginUser(URL, requestBody);
  };

  async function loginUser(URL, requestBody) {
    try {
      const myData = await postData(URL, requestBody);
      if (myData) {
        handleClose(myData);
      }
      return true;
    } catch (error) {
      setFormValid(
        error.response.data.msg ?? "Invalid email or password, login failed"
      );
      return false;
    }
  }
  const handleClose = (mydata) => {
    if (mydata && mydata.user) {
      login(mydata.user, mydata.token);
      navigate("/", { state: [] });
    } else {
      navigate("/");
    }
  };

  const handleLoginClickShowPassword = () => setShowPassword((show) => !show);

  const handleLoginMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dialog
          open={open}
          onClose={null}
          sx={{
            background: "#ffffff",
          }}
        >
          <DialogTitle
            variant="h5"
            sx={{
              padding: ".2rem",
              textAlign: "center",
              color: "#0E67E4",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Login
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 0,
                top: 5,
                color: "0E67E4",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent
            sx={{
              color: "0E67E4",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              width: 350,
              height: 1,
            }}
          >
            <Typography
              sx={{
                color: "#0E67E4",
                variant: "h6",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Not a member yet?{"    "}
              <Link href="/signup" variant="body1" style={{ color: "#0E67E4" }}>
                Sign Up
              </Link>
            </Typography>
            <TextField
              sx={{
                fontSize: ".2rem",

                "& .MuiInputBase-input": {
                  fontSize: "20px",
                  height: "1em",
                },
                "& .MuiFormLabel-root": {
                  color: "#0E67E4",
                  fontSize: "18px",
                  fontWeight: "100",
                  lineHeight: "1em",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "1rem ",
                },
              }}
              id="email"
              error={emailError}
              label="Email Address"
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
              onBlur={handleLoginEmail}
              variant="outlined"
              fullWidth
              size="small"
              required
            />

            <TextField
              sx={{
                fontSize: ".2rem",
                "& .MuiInputBase-input": {
                  fontSize: "20px",
                  height: "1em",
                },
                "& .MuiFormLabel-root": {
                  color: "#0E67E4",
                  fontSize: "18px",
                  fontWeight: "100",
                  lineHeight: "1em",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "1rem ",
                },
                "&.MuiSvgIcon-root": {
                  fill: "#000000",
                },
              }}
              error={passwordError}
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              onBlur={handleLoginPassword}
              fullWidth
              required
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleLoginClickShowPassword}
                      onMouseDown={handleLoginMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography>
              <Link
                href="/forgotpassword"
                variant="body1"
                style={{ color: "#0E67E4" }}
              >
                Forgot Password
              </Link>
            </Typography>
            <Button
              onClick={handleLoginSubmit}
              fullWidth
              variant="contained"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
            <Typography component={"div"}>
              {formValid && (
                <Alert
                  severity="error"
                  sx={{
                    "& .MuiAlert-standardError": {
                      backgroundColor: "white",
                      color: "#d32f2f",
                    },
                  }}
                >
                  {formValid}{" "}
                </Alert>
              )}
            </Typography>
            <Typography component={"div"}>
              {success && <Alert severity="success">{success}</Alert>}
            </Typography>
          </DialogContent>
        </Dialog>
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
}
export default Login;

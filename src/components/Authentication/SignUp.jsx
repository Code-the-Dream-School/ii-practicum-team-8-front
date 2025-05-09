import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  OutlinedInput,
} from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { postData } from "../../util/index";

const isName = (name) => /^[a-zA-Z]{2,40}$/.test(name);

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const URL = `http://localhost:8000/api/v1/auth/register`;

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const handleFirstname = () => {
    if (!isName(firstnameInput)) {
      setFirstnameError(true);
      return;
    }
    setFirstnameError(false);
  };
  const handleLastname = () => {
    if (!isName(lastnameInput)) {
      setLastnameError(true);
      return;
    }
    setLastnameError(false);
  };
  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 15
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };
  const handleConfirmPassword = () => {
    if (
      !confirmPasswordInput ||
      confirmPasswordInput.length < 5 ||
      confirmPasswordInput.length > 15
    ) {
      setConfirmPasswordError(true);
      return;
    }
    setConfirmPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstnameError || !firstnameInput) {
      setFormValid("Please enter valid Firstname ");
      return;
    }

    if (lastnameError || !lastnameInput) {
      setFormValid("Please enter valid Lastname ");
      return;
    }
    if (emailError || !emailInput) {
      setFormValid("Email is invalid.Please enter Email");
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid(
        "Password should be in 5-15 characters.Please enter Password"
      );
      return;
    }

    if (passwordInput !== confirmPasswordInput) {
      setFormValid("Passwords doesn't match");
      return;
    }

    setFormValid(null);

    //   Call to server to post the data
    const requestBody = {
      name: firstnameInput + " " + lastnameInput,

      email: emailInput,
      password: passwordInput,
    };
    registerUser(URL, requestBody);
  };

  async function registerUser(URL, requestBody) {
    try {
      const myData = await postData(URL, requestBody);
      //setMessage("Signup completed");
      handleClose(myData);
    } catch (error) {
      setFormValid("Singup failed, please check your input");
      return false;
    }
    return true;
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = (mydata) => {
    if (mydata && mydata.user) {
      const data = {
        token: mydata.token,
        name: mydata.user.name,
        isLoggedIn: true,
      };
      navigate("/", { state: data });
    } else {
      navigate("/");
    }
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
            background: "#D1E8FB",
            "& .MuiPaper-root": {
              background: "#D1E8FB",
              border: ".3rem solid #0E67E4",
              borderRadius: "1.5rem",
            },
            "& .MuiBackdrop-root": {
              backgroundColor: "D1E8FB",
            },
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
            SignUp
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
              gap: 1.2,
              width: 400,
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
              Already a member?
              <Link href="/login" variant="h6" style={{ color: "0E67E4" }}>
                Login
              </Link>
            </Typography>
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "20px",
                  height: "1em",
                  borderRadius: "1rem !important",
                  "&:-webkit-autofill": {
                    backgroundColor: "white !important",
                    borderRadius: "1rem !important",
                    WebkitBoxShadow: "0 0 0 100px white inset",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#0E67E4",
                  fontSize: "18px",
                  fontWeight: "100",
                  lineHeight: "1em",
                },
                // "& .MuiFilledInput-root": {
                //   backgroundColor: "white",
                //   borderRadius: "1rem ",
                // },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "1rem ",
                },
                "& .MuiFormControl-root": {
                  borderColor: "#0E67E4",
                },
              }}
              id="firstname"
              error={firstnameError}
              label="First Name"
              value={firstnameInput}
              onChange={(event) => setFirstnameInput(event.target.value)}
              onBlur={handleFirstname}
              variant="outlined"
              fullWidth
              size="small"
              required
              //   InputProps={{ disableUnderline: true }}
            />
            <TextField
              sx={{
                fontSize: ".2rem",
                backgroundColor: "white",
                borderColor: "#0E67E4",
                borderRadius: "1rem",
                "& .MuiInputBase-input": {
                  color: "#000000",
                  borderColor: "#0E67E4",
                  fontSize: "20px",
                  height: "1em",
                  borderRadius: "1rem !important",
                  "&:-webkit-autofill": {
                    color: "#000000",
                    //fontSize: "18px",
                    backgroundColor: "white !important",
                    borderRadius: "1rem !important",
                    WebkitBoxShadow: "0 0 0 100px white inset",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#0E67E4",
                  fontSize: "18px",
                  fontWeight: "100",
                  lineHeight: "1em",
                },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "1rem ",
                },
                "& .MuiFormControl-root": {
                  borderColor: "#0E67E4",
                },
              }}
              id="lastname"
              error={lastnameError}
              label="Last Name"
              value={lastnameInput}
              onChange={(event) => setLastnameInput(event.target.value)}
              onBlur={handleLastname}
              variant="outlined"
              fullWidth
              size="small"
              required
              //   InputProps={{ disableUnderline: true }}
            />
            <TextField
              sx={{
                fontSize: ".2rem",
                backgroundColor: "white",
                borderColor: "#0E67E4",
                borderRadius: "1rem",
                "& .MuiInputBase-input": {
                  color: "#000000",
                  borderColor: "#0E67E4",
                  fontSize: "20px",
                  height: "1em",
                  borderRadius: "1rem !important",
                  "&:-webkit-autofill": {
                    color: "#000000",
                    //fontSize: "18px",
                    backgroundColor: "white !important",
                    borderRadius: "1rem !important",
                    WebkitBoxShadow: "0 0 0 100px white inset",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#0E67E4",
                  fontSize: "18px",
                  fontWeight: "100",
                  lineHeight: "1em",
                },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "1rem ",
                },
                "& .MuiFormControl-root": {
                  borderColor: "#0E67E4",
                },
              }}
              id="email"
              error={emailError}
              label="Email Address"
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
              onBlur={handleEmail}
              variant="outlined"
              fullWidth
              size="small"
              required
              //   InputProps={{ disableUnderline: true }}
            />

            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "1rem",
                "& .MuiInputBase-input": {
                  color: "#000000",
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
                  backgroundColor: "white",
                  borderRadius: "1rem ",
                },
                "& .MuiFormControl-root": {
                  borderColor: "#0E67E4",
                },
              }}
              error={passwordError}
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              onBlur={handlePassword}
              fullWidth
              required
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                // disableUnderline: true,
              }}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "1rem",
                "& .MuiInputBase-input": {
                  color: "#000000",
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
                  backgroundColor: "white",
                  borderRadius: "1rem ",
                },
                "& .MuiFormControl-root": {
                  borderColor: "#0E67E4",
                },
              }}
              error={confirmPasswordError}
              label="ConfirmPassword"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={confirmPasswordInput}
              onChange={(event) => setConfirmPasswordInput(event.target.value)}
              onBlur={handleConfirmPassword}
              fullWidth
              required
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                // disableUnderline: true,
              }}
            />
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              startIcon={<LoginIcon />}
            >
              SIGN UP
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
    </>
  );
}

export default SignUp;

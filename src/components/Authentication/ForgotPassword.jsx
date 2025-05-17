import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  SvgIcon,
} from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { postData } from "../../util/index";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const URL = `${import.meta.env.VITE_APP_API_URL}/api/v1/auth/forgot-password`;

function Forgot() {
  const [emailInput, setEmailInput] = useState("");

  const [emailError, setEmailError] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleLoginEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };
  const handleResetPassword = (e) => {
    e.preventDefault();

    if (emailError || !emailInput) {
      setFormValid("Please enter valid Email");
      return;
    }
    setFormValid(null);
    const data = {
      email: emailInput,
    };
    resetPassword(data);
  };

  async function resetPassword(requestBody) {
    try {
      const myData = await postData(URL, requestBody);
      handleClose(myData);
      return true;
    } catch (error) {
      setFormValid(
        error.response.data.msg ??
          "Forgot password failed, please check your email address"
      );
      return false;
    }
  }
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
            Forgot Password ?
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
              gap: 4,
              width: 400,
              height: 300,
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
              Enter your email address to get a link to reset your password.
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
            <Button
              onClick={handleResetPassword}
              fullWidth
              variant="contained"
              startIcon={<LoginIcon />}
            >
              Send reset Link
            </Button>

            <Link
              href="/login"
              variant="h6"
              sx={{
                color: "#0E67E4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Back to Login
            </Link>

            <Typography component={"div"}>
              {formValid && (
                <Alert
                  severity="error"
                  sx={{
                    "& .MuiAlert-standardError": {
                      backgroundColor: "white",
                      color: "#d32f2f",
                    },
                    "&.MuiAlert-root": {
                      color: "#d32f2f",
                    },
                  }}
                >
                  {formValid}
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
export default Forgot;

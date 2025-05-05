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

function Forgot() {
  const [emailInput, setEmailInput] = useState("");

  const [emailError, setEmailError] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/login");
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
      setFormValid("Please enter Email");
      return;
    }

    console.log("Email:" + emailInput);
    setFormValid(null);
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
              Enter your email address to get a link to reset your password.
            </Typography>
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
            <Link href="/login" variant="h6" style={{ color: "#0E67E4" }}>
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../util/index";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Alert from "@mui/material/Alert";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

function ResetPassword() {
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleNewPassword = () => {
    if (
      !newPasswordInput ||
      newPasswordInput.length < 8 ||
      newPasswordInput.length > 15
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleConfirmPassword = () => {
    if (
      !confirmPassword ||
      confirmPassword.length < 8 ||
      confirmPassword.length > 15
    ) {
      setConfirmPasswordError(true);
      return;
    }
    setConfirmPasswordError(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPasswordInput.length < 6) {
      setFormValid(
        "Password must be atleast 6 characters.Please enter valid password"
      );
      return;
    }

    if (confirmPassword.length < 6) {
      setFormValid(
        "Confirm password must be atleast 6 characters.Please enter valid confirm password"
      );
      return;
    }

    if (newPasswordInput !== confirmPassword) {
      setFormValid("Passwords doesn't match");
      return;
    }
    setFormValid(null);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    navigate("/login");
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
              textAlign: "center",
              color: "#0E67E4",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Reset Password
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 2,
                color: "0E67E4",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent
            style={{
              color: "0E67E4",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              width: 400,
              height: 180,
            }}
          >
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
              error={passwordError}
              label="New Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={newPasswordInput}
              onChange={(event) => setNewPasswordInput(event.target.value)}
              onBlur={handleNewPassword}
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
              }}
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
              error={confirmPasswordError}
              label="ConfirmPassword"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
              }}
            />
            <Typography>
              <Button
                onClick={handleResetPassword}
                fullWidth
                variant="contained"
                startIcon={<LoginIcon />}
              >
                Submit
              </Button>
            </Typography>

            <Typography component={"div"}>
              {formValid && (
                <Alert
                  severity="error"
                  sx={{
                    "& .MuiAlert-root": {
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
export default ResetPassword;

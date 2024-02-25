import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

const useShowToast = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const showToast = (title, description, status) => {
    setMessage(description);
    setSeverity(status);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    showToast,
    Snackbar: (
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    ),
  };
};

export default useShowToast;

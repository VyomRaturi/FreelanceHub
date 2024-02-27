import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import usePostJob from "../../hooks/usePostJob";
import { useTheme } from "@mui/material/styles";

export default function PostModal() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = React.useState({ jobTitle: "", description: "" });
  const { isPosting, handlePostJob } = usePostJob();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      width: 400,
    },
    bgcolor: "background.paper",
    border: "2px solid #fff",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePostJob(inputs);
    setInputs({ jobTitle: "", description: "" });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Post Job
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflowY: "auto", maxHeight: "90vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the job details
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Job Title"
              value={inputs.jobTitle}
              onChange={(e) =>
                setInputs({ ...inputs, jobTitle: e.target.value })
              }
              fullWidth
              margin="normal"
              required={true}
            />
            <TextField
              label="Description"
              value={inputs.description}
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required={true}
            />
            <Button
              disabled={isPosting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Post Job
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

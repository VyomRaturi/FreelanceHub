import { Modal, Box, Typography, Button, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const UserProfileModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const user = JSON.parse(localStorage.getItem("user-info"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(3),
    borderRadius: "15px",
    [theme.breakpoints.up("sm")]: {
      width: 500,
    },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="user-profile-modal-title"
      aria-describedby="user-profile-modal-description"
    >
      <Box sx={{ ...style, overflowY: "auto", maxHeight: "90vh" }}>
        <Avatar
          src={user.profilePicURL}
          sx={{ width: theme.spacing(10), height: theme.spacing(10) }}
        />
        <Typography id="user-profile-modal-title" variant="h5" component="h2">
          {user.username}
        </Typography>
        <Typography
          id="user-profile-modal-fullname"
          variant="body1"
          sx={{ fontSize: "18px" }}
        >
          Full Name: {user.fullName}
        </Typography>
        <Typography
          id="user-profile-modal-email"
          variant="body1"
          sx={{ fontSize: "18px" }}
        >
          Email: {user.email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default UserProfileModal;

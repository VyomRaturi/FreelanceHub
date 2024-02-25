import { Button } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import useLogout from "../../hooks/useLogout";

const HomePage = () => {
  const { handleLogout, isLoggingOut, error } = useLogout();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        disabled={isLoggingOut}
        onClick={handleLogout}
      >
        Logout
      </Button>

      {error && (
        <Alert severity="error" sx={{ marginTop: "16px" }}>
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      )}
    </>
  );
};

export default HomePage;

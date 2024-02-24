import { Alert, Button, AlertIcon } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";

const HomePage = () => {
  const { handleLogout, isLoggingOut, error } = useLogout();
  return (
    <>
      <Button isLoading={isLoggingOut} onClick={handleLogout}>
        Logout
      </Button>

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
    </>
  );
};

export default HomePage;

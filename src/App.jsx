import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import Home from "./pages/Home/HomePage";
import useAuthStore from "./store/authStore";

const App = () => {
  const authUser = useAuthStore((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/auth"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

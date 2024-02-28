import { useState } from "react";
import { Button, Input, Alert } from "@mui/material";
import useLogin from "../../hooks/useLogin";
import GoogleAuth from "./GoogleAuth";
import VisibilityIcon from "../../assets/eye.png";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");

  const { loading, error, login } = useLogin();

  const handlePasswordShow = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="px-8 md:px-16">
        <h2 className="font-bold text-2xl text-[#0e7b7e]">Login</h2>
        <p className="text-xs mt-4 text-[#00000]">
          If you are already a member, please log in
        </p>

        <form className="flex flex-col gap-4">
          <Input
            className="p-2 mt-8 rounded-xl"
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={(e) => {
              setInputs({ ...inputs, email: e.target.value });
            }}
          />

          <div className="relative">
            <Input
              className="p-2 rounded-xl w-full"
              type={passwordType}
              name="password"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />
            <div onClick={handlePasswordShow} className="cursor-pointer">
              <img
                src={VisibilityIcon}
                alt="show password"
                className="absolute right-2 top-2 w-6 h-6"
              />
            </div>
          </div>
          {error && (
            <Alert severity="error" className="rounded-xl">
              {error.message}
            </Alert>
          )}
          <Button
            variant="contained"
            onClick={() => login(inputs)}
            style={{
              backgroundColor: "#0e7b7e",
              color: "white",
              marginTop: "10px",
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>

        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>

        <GoogleAuth />

        <div className="mt-5 text-xs border-b border-[#000000] py-4 text-[#000000]">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </>
  );
};

export default Login;

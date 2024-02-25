import { useState } from "react";
import { Button, Input, Alert } from "@mui/material";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";
import GoogleAuth from "./GoogleAuth";
import VisibilityIcon from "../../assets/eye.png";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const { loading, error, signup } = useSignUpWithEmailAndPassword();

  const handlePasswordShow = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="px-8 md:px-16">
        <h2 className="font-bold text-2xl text-[#14A800]">Register</h2>
        <p className="text-xs mt-4 text-[#00000]">
          If you are not a member, please register
        </p>

        <form className="flex flex-col gap-4">
          <Input
            className="p-2 mt-8 rounded-xl"
            type="email"
            placeholder="Email"
            value={inputs.email}
            onChange={(e) => {
              setInputs({ ...inputs, email: e.target.value });
            }}
          />
          <Input
            className="p-2 rounded-xl"
            type="text"
            placeholder="Full Name"
            value={inputs.fullName}
            onChange={(e) => {
              setInputs({ ...inputs, fullName: e.target.value });
            }}
          />

          <Input
            className="p-2 rounded-xl"
            type="text"
            placeholder="Username"
            value={inputs.username}
            onChange={(e) => {
              setInputs({ ...inputs, username: e.target.value });
            }}
          />
          <div className="relative">
            <Input
              className="p-2 rounded-xl w-full"
              type={passwordType}
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
            onClick={() => signup(inputs)}
            style={{
              backgroundColor: "#14A800",
              color: "white",
              marginTop: "10px",
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>

        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>

        <GoogleAuth />
      </div>
    </>
  );
};

export default SignUp;

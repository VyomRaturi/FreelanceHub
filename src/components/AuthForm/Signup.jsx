import { useState } from "react";
import passwordshow from "../../assets/eye.png";
import GoogleAuth from "./GoogleAuth";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";
import { Alert, AlertIcon, Button } from "@chakra-ui/react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const { loading, error, signup } = useSignUpWithEmailAndPassword();

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  // const handleSignup = () => {
  //   console.log("Signup");
  // };

  return (
    <>
      <div className="px-8 md:px-16">
        <h2 className="font-bold text-2xl text-[#14A800]">Register</h2>
        <p className="text-xs mt-4 text-[#00000]">
          If you are not a member, please register
        </p>

        <form action="" className="flex flex-col gap-4">
          <input
            className="p-2 mt-8 rounded-xl border"
            type="email"
            placeholder="Email"
            value={inputs.email}
            onChange={(e) => {
              setInputs({ ...inputs, email: e.target.value });
            }}
          />
          <input
            className="p-2 rounded-xl border"
            type="text"
            placeholder="Full Name"
            value={inputs.fullName}
            onChange={(e) => {
              setInputs({ ...inputs, fullName: e.target.value });
            }}
          />

          <input
            className="p-2 rounded-xl border"
            type="text"
            placeholder="Username"
            value={inputs.username}
            onChange={(e) => {
              setInputs({ ...inputs, username: e.target.value });
            }}
          />
          <div className="relative">
            <input
              className="p-2 rounded-xl border w-full"
              type={passwordType}
              placeholder="Password"
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />
            <div onClick={handlePasswordShow} className="cursor-pointer">
              <img
                src={passwordshow}
                alt="show password"
                className="absolute right-2 top-2 w-6 h-6"
              />
            </div>
          </div>

          {error && (
            <Alert status="error" className="rounded-xl">
              <AlertIcon />
              {error.message}
            </Alert>
          )}

          <Button
            isLoading={loading}
            onClick={() => signup(inputs)}
            backgroundColor={"#14A800"}
            color={"white"}
            _hover={{ bg: "#14a8009e" }}
          >
            Register
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

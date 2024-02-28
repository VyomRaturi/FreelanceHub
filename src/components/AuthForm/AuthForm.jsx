import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import freelance from "../../assets/freelance.jpg";

const AuthForm = () => {
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(!signup);
  };

  return (
    <>
      <div className="w-full">
        {signup ? <SignUp /> : <Login />}

        <div className="mt-3 text-xs flex justify-between items-center text-[#000000] px-8 md:px-16">
          {signup ? (
            <p>Already have an account?</p>
          ) : (
            <p>Don&apos;t have an account?</p>
          )}
          <button
            onClick={handleSignup}
            className="py-2 px-5 bg-[#0e7b7e] text-white border rounded-xl hover:scale-110 duration-300"
          >
            {signup ? "Login" : "Register"}
          </button>
        </div>
      </div>

      <div className="md:block hidden w-1/2">
        <img className="rounded-2xl" src={freelance} alt="freelance" />
      </div>
    </>
  );
};

export default AuthForm;

import { useState } from "react";

import { signupParams } from "@pathakkar01/common";
import AuthHeader from "./AuthHeader";
import LabelledInput from "./LabelledInput";

const SignupDetails = () => {
  const [postInputs, setPostInputs] = useState<signupParams>({
    name: "",
    email: "",
    password: "",
  });
  const onSignup = () => {
    console.log(postInputs);
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div>
        <AuthHeader type="signup" />

        <div className="mt-4">
          <LabelledInput
            label="Name"
            placeholder="Enter your name..."
            onChange={(e) => {
              setPostInputs((c) => ({ ...c, name: e.target.value }));
            }}
          />

          <LabelledInput
            label="Email"
            placeholder="m@example.com"
            onChange={(e) => {
              setPostInputs((c) => ({ ...c, email: e.target.value }));
            }}
          />
          <LabelledInput
            label="Password"
            placeholder=""
            onChange={(e) => {
              setPostInputs((c) => ({ ...c, password: e.target.value }));
            }}
            type="password"
          />
        </div>
        <button
          type="button"
          onClick={onSignup}
          className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupDetails;

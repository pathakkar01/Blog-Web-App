import { useState } from "react";

import { signInParams } from "@pathakkar01/common";
import AuthHeader from "./AuthHeader";
import LabelledInput from "./LabelledInput";

const SigninDetails = () => {
  const [postInputs, setPostInputs] = useState<signInParams>({
    email: "",
    password: "",
  });
  const onSignIn = () => {
    console.log(postInputs);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div>
        <AuthHeader type="signin" />

        <div className="mt-4">
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
          className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={onSignIn}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default SigninDetails;

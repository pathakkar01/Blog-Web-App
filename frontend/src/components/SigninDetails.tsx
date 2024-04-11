import { useState } from "react";

import { signInParams } from "@pathakkar01/common";
import AuthHeader from "./AuthHeader";
import LabelledInput from "./LabelledInput";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninDetails = () => {
  const [postInputs, setPostInputs] = useState<signInParams>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSignIn = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const data = res.data;
      localStorage.setItem("token", data.token);
      navigate("/blogs");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
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

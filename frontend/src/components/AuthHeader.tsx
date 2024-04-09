import { Link } from "react-router-dom";

const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="flex items-center flex-col px-16">
      <h2 className="text-3xl font-bold">Create an account</h2>
      <h5 className="text-sm mt-2 font-semibold text-gray-500">
        {type === "signin"
          ? "Dont't have an account?"
          : "Already have an account?"}
        <Link
          to={type === "signin" ? "/signup" : "/signin"}
          className="underline pl-2"
        >
          {type === "signin" ? "Sign Up" : "Log in"}
        </Link>
      </h5>
    </div>
  );
};

export default AuthHeader;

import Quote from "../components/Quote";
import SigninDetails from "../components/SigninDetails";

const Signin = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <SigninDetails />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;

import SignupDetails from "../components/SignupDetails";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <SignupDetails />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;

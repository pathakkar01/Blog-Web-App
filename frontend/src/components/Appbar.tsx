import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
export const Appbar = () => {
  return (
    <div className="border-b flex justify-between py-2 px-10">
      <Link to={"/blogs"} className="flex justify-center flex-col text-lg">
        Medium
      </Link>
      <div>
        <Avatar name="Pooja" size="big" />
      </div>
    </div>
  );
};

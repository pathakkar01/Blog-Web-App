import { Avatar } from "./BlogCard";
export const Appbar = () => {
  return (
    <div className="border-b flex justify-between py-2 px-10">
      <div className="flex justify-center flex-col text-lg">Medium</div>
      <div>
        <Avatar name="Pooja" size="big" />
      </div>
    </div>
  );
};

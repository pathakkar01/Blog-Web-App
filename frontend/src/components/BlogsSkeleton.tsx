import { Circle } from "./BlogCard";

export const BlogsSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="border-b p-4 border-slate-200 pb-4">
        <div className="flex">
          <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>

          <div className="flex justify-center flex-col w-1/2	 text-sm font-light px-2">
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
          </div>
          <div className="flex justify-center flex-col p-1">
            <Circle />
          </div>
          <div className="flex justify-center flex-col w-1/2	 text-sm text-slate-500 px-2">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
        </div>
        <div className="font-semibold text-xl pt-2">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-slate-500 pt-1 ">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-2">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export const BlogSkeleton = () => {
  return (
    <div className="flex justify-content ">
      <div className="grid grid-cols-12 w-full mt-5 px-20 max-w-screen-2xl gap-6">
        <div className="col-span-8">
          <div className="text-4xl font-extrabold">
            <div className="h-2 bg-gray-200 rounded-full w-1/2  mb-2.5"></div>
          </div>
          <div className="pt-4 text-lg  text-slate-500">
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
          </div>
          <div className="text-xl mt-5 text-slate-600">
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="text-slate-500 font-semibold">Author</div>
          <div className="flex gap-4 pt-2">
            <div className="pr-4 flex flex-col justify-center">
              <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>
            <div>
              <div className="text-xl font-bold ">
                <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
              </div>
              <div className=" text-slate-500">
                <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

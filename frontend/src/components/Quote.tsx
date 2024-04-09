const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div className="md:max-w-sm lg:max-w-md ">
          <div className="md:text-xl font-bold lg:text-2xl">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="md:text-base lg:text-lg font-semibold  mt-2">
            Jules Winnfield
          </div>
          <div className="md:text-xs lg:text-sm font-medium text-gray-500">
            CEO, Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

import React from "react";

const ExprenceLaptop: React.FC = () => {
  return (

    <div className="mt-20 flex justify-center lg:pl-5 xl:pl-[150px] ">
      <div className="laptop-wrapper relative">
        <img src="/image/lap.png" alt="Laptop" className="laptop-img w-[150px] sm:w-[200px] md:w-[300px]" />
        <div className=" text-[#BB51CC] screen-text absolute top-[28%] left-[35%] sm:left-[40%] sm:font-bold md:w-[200px] md:left-[40%] md:text-2xl">Hi Im Easin</div>
      </div>
    </div>
  );
};

export default ExprenceLaptop;

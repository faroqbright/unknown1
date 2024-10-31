import type { HTMLAttributes } from "react";
import React from "react";

interface BauhasheroProps extends HTMLAttributes<HTMLDivElement> {}

const Bauhashero: React.FC<BauhasheroProps> = ({ ...props }) => {
  return (
    <div className="w-full flex justify-center h-fit m-0 p-0" {...props}>
      <h1 className="text-[100px] lg:text-[260px] w-full md:max-w-[50%] text-center lg:leading-[200px]  max-sm:leading-[85px] max-sm:mt-[60px]  lg:tracking-wider md:tracking-wider">
        Bauhas Tapete
      </h1>
    </div>
  );
};

export default Bauhashero;

import type { HTMLAttributes } from "react";
import React from "react";

interface BauhasheroProps extends HTMLAttributes<HTMLDivElement> {}

const Bauhashero: React.FC<BauhasheroProps> = ({ ...props }) => {
  return (
    <div className="w-full flex justify-center h-fit m-0 p-0" {...props}>
      <h1 className="text-[100px] lg:text-[260px] w-full md:max-w-[50%] text-center lg:leading-[200px] tracking-wider">
        Bauhas Tapete
      </h1>
    </div>
  );
};

export default Bauhashero;

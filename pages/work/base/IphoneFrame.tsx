import Image from "next/image";
import type { HTMLAttributes } from "react";
import React from "react";

interface IphoneFrameProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

const IphoneFrame: React.FC<IphoneFrameProps> = ({ ...props }) => {
  return (
    <div
      className={`h-[932px] max-sm:h-[600px] w-[420px] max-sm:w-[270px] border-[16px] border-black rounded-[40px] relative ${props.className}`}
    >
      <Image
        src={props.src}
        alt="website"
        layout="fill"
        className="rounded-[40px]"
      />
    </div>
  );
};
export default IphoneFrame;

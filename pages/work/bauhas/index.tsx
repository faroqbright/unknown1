/* eslint-disable @next/next/no-img-element */
import Bauhashero from "@/components/Work/Bauhas/BauhasHero";
import Image from "next/image";
import IphoneFrame from "../base/IphoneFrame";
import { Logo } from "@/components/Svg/Svg";
import Footer from "@/components/Footer/Footer";

export default function Bauhas() {
  return (
    <div className="w-full container mx-auto mb-20">
      <Bauhashero />
      <p className="w-full text-[35px] font-semibold max-sm:px-[25px] px-2 lg:text-[90px] flex justify-center break-words lg:max-w-[90%] lg:mx-auto pt-28 saolfont ">
        Welcome to Bauhaustapete, the ultimate destination for anyone looking
        for stunning and high-quality Bauhaus wallpaper. The website has been
        designed to provide a seamless and enjoyable shopping experience.
      </p>

      <div className="grid gap-3 w-full break-words pt-28 grid-cols-1 lg:grid-cols-2 lg:min-h-[600px]">
        <div className="flex flex-col text-xl lg:text-4xl col-span-1 lg:pl-28 gap-10">
          <div className="col-span-1 relative aspect-square lg:hidden">
            <Image
              src={"/work/bauhas/RASCH_HM_1 1.jpg"}
              layout="fill"
              className="bg-contain object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src={"/work/bauhas/bauhas_logo.png"}
              width={300}
              height={300}
              alt="bauhas"
            />
          </div>
          <p className="text-2xl leading-snug max-sm:px-[20px] px-2 lg:px-0">
            Bauhaus Wallpaper: Celebrating the Iconic Style of the Modernist
            Movement.
          </p>
          <p className="text-2xl leading-snug max-sm:px-[20px] px-2 lg:px-0">
            Bauhaus, the art school that revolutionized the design world in the
            1920s
          </p>
        </div>
        <div className="col-span-1 relative aspect-square hidden lg:block">
          <Image
            src={"/work/bauhas/RASCH_HM_1 1.jpg"}
            layout="fill"
            className="bg-contain object-cover"
            alt=""
          />
        </div>
      </div>
      <p className="text-2xl lg:text-4xl max-sm:px-[20px] max-sm:pt-[30px] leading-snug px-2 lg:p-28">
        and 30s, is celebrated for its commitment to modernism, simplicity, and
        functionality. Today, this iconic style continues to inspire designers
        and enthusiasts alike, and is now available in the form of Bauhaus
        wallpaper.
      </p>

      <div className="w-full h-full mt-28 max-sm:mt-20 px-4 max-sm:px-8">
        <div className="lg:w-[75%] mx-auto border-black border-[5px] rounded-xl lg:border-[10px] lg:rounded-[50px] aspect-video bg-gray-300"></div>
      </div>

      <div className="relative w-full aspect-square lg:w-[90%] max-sm:w-[90%] lg:mx-auto max-sm:mx-auto lg:mt-28 max-sm:mt-24 px-4 lg:px-0 ">
        <Image
          src={"/work/bauhas/FireShot_Capture_053.jpg"}
          layout="fill"
          alt=""
          className="px-2 max-sm:px-0"
        />
      </div>
      <div className="relative h-[500px] max-sm:h-[420px] lg:mt-28 md:mt-28 flex justify-center place-items-center">
        <div className="absolute aspect-1/2 w-32 lg:w-60 -z-30 mix-blend-multiply">
          <Image
            src={"/work/bauhas/RASCH_HM_4.jpg"}
            alt=""
            layout="fill"
            className="aspect-1/2 w-36 -z-30 -rotate-12 bg-cover"
          />
        </div>
        <p className="text-5xl max-sm:text-[43px] lg:text-[150px] text-nowrap z-50 saolfont">
          Lorem ipsum dolor sit.
        </p>
      </div>

      <div className="lg:pt-28 w-full h-full lg:h-[800px] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full relative col-span-1 aspect-square">
          <Image
            src={"/work/bauhas/RASCH_HM_5.jpg"}
            layout="fill"
            alt=""
            className="lg:object-contain bg-cover"
          />
        </div>
        <div className="col-span-1 text-2xl flex flex-col leading-snug justify-center gap-10 tracking-wider pr-10 px-2 lg:px-0 max-sm:px-[20px] max-sm:mt-20 mt-4 lg:mt-0">
          <p>
            The Bauhaus wallpaper collection captures the spirit of the
            movement, with its clean lines, bold shapes, and striking colors.
            Each design in the collection is a modern interpretation of the
            classic Bauhaus style, featuring geometric shapes and abstract
            patterns that reflect the movement’s commitment to simplicity and
            functionality.
          </p>
          <p>
            The wallpaper is available in a range of colors and patterns, from
            monochromatic designs to bold and colorful compositions that make a
            statement. Whether you’re looking for a subtle accent wall or a bold
            statement piece, there is a Bauhaus wallpaper design that will suit
            your needs.
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square lg:aspect-video mt-28 h-fit flex justify-center place-items-center object-cover bg-cover">
        <Image
          src={"/work/bauhas/bauhas_section_bg.jpeg"}
          layout="fill"
          alt=""
          className="-z-30"
        />
        <div className="lg:w-[75%] w-full mx-4 lg:mx-auto border-black border-[5px] rounded-xl lg:border-[10px] lg:rounded-[50px] aspect-video bg-gray-300"></div>
      </div>

      <div className="mt-28 max-sm:mt-16">
        <p className="text-[44px] lg:text-[70px] leading-snug lg:p-28 max-sm:px-[20px] saolfont font-bold">
          Welcome to Bauhaustapete, the ultimate destination for anyone looking
          for stunning and high-quality Bauhaus wallpaper. The website has been
          designed to provide a seamless and enjoyable shopping experience.
        </p>
      </div>

      <div className="lg:pt-28 w-full h-[800px] max-sm:h-[650px] grid lg:grid-cols-2  max-sm:flex max-sm:flex-col-reverse">
        <div className="col-span-1 text-xl flex flex-col leading-snug justify-center gap-10 tracking-wider pr-10 max-sm:px-[20px] max-sm:mt-16">
          <p>
            At vero eos et accusam et justo duo dolores ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>Lorem ipsum dolor sit amet, consetetur.</p>
        </div>
        <div className="w-full relative col-span-1 lg:h-auto max-sm:h-[300px]">
          <Image
            src={"/work/bauhas/RASCH_HM_1.jpg"}
            layout="fill"
            alt=""
            className="lg:object-contain bg-cover"
          />
        </div>
      </div>

      <div className="relative aspect-video h-full w-full mt-28 max-sm:mb-20">
        <Image
          src={"/work/bauhas/websites_frame.png"}
          alt=""
          layout="fill"
          className="bg-contain object-cover"
        />
      </div>

      <div className="flex justify-between max-sm:justify-center mt-28 max-sm:mt-[340px] place-items-end h-[1050px]">
        <div className="grid lg:grid-cols-3 lg:gap-32 max-sm:gap-20">
          <div>
            <IphoneFrame src="/work/bauhas/iphone_frame_1.png" />
          </div>
          <div className="relative lg:translate-y-[-60px]">
            <IphoneFrame
              src="/work/bauhas/iphone_frame_2.png"
              className="place-self-start"
            />
          </div>
          <div className="lg:block max-sm:hidden">
            <IphoneFrame src="/work/bauhas/iphone_frame_3.png" />
          </div>
        </div>
      </div>

      <div className="relative aspect-video h-full w-full mt-28">
        <Image
          src={"/work/bauhas/orange_chair.png"}
          alt=""
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-5 h-full place-items-start">
        <div className="w-full aspect-auto mt-28 relative flex h-auto max-sm:px-6">
          <img
            src={"/work/bauhas/_Damals_Rasch_Bauhaus_Desktop.jpg"}
            alt=""
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-full aspect-auto mt-28 relative hidden lg:flex h-auto">
          <img
            src={"/work/bauhas/_Heute_Rasch_Bauhaus_Desktop.jpg"}
            alt=""
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="relative h-[500px] max-sm:h-[420px]  lg:mt-28 flex justify-center place-items-center">
        <div className="absolute aspect-1/2 w-32 lg:w-60 -z-30 mix-blend-multiply">
          <Image
            src={"/work/bauhas/RASCH_Detail_1B_170410_rgb.jpg"}
            alt=""
            layout="fill"
            className="aspect-1/2 w-56 -z-30 -rotate-12 bg-cover"
          />
        </div>
        <p className="text-5xl max-sm:text-[43px] lg:text-[150px] text-nowrap z-50 saolfont">
          Lorem ipsum dolor sit.
        </p>
      </div>

      <div className="w-full flex justify-center h-fit m-0 p-0 lg:mt-28 max-sm:mt-20">
        <h1 className="lg:text-[150px] max-sm:text-[60px] max-sm:font-extrabold w-full md:max-w-[50%] text-center lg:leading-[150px]">
          Thyssen
          <br /> Bornemisza
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full mt-28 saolfont text-3xl">
        <div className="gap-2 flex flex-col">
          <p className="max-sm:text-end">previous Project</p>
          <div className="bg-[#666666] aspect-video h-[200px]"></div>
          <p className="max-sm:text-end">previous Project Name</p>
        </div>
        <div className="gap-2 flex flex-col max-sm:mt-32">
          <p>previous Project</p>
          <div className="bg-[#666666] aspect-video h-[200px]"></div>
          <p>previous Project Name</p>
        </div>
      </div>

      <div className="mt-28 saolfont">
        <div className="w-full flex justify-center place-items-center flex-col gap-10">
          <div className="w-20 h-20">
            <Logo />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

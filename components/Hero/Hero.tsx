import s from "./hero.module.scss";
import { HeroArrowDown } from "../Svg/Svg";
import { useScrollTo } from "react-use-window-scroll";
import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import { useState, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

type AnimationData = {
  default: object;
};

const Hero: React.FC = () => {
  const scrollTo = useScrollTo();
  const size = useWindowSize();
  const [showData2, setShowData2] = useState(false);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowData2(true);
    }, 15800); // Switch to second GIF after 16 seconds

    return () => clearTimeout(timer);
  }, []);

  const getAnimationData = async (): Promise<AnimationData | null> => {
    const width = size?.width ?? 0; // Fallback to 0 if width is undefined

    if (width > 640) {
      return showData2 ? import('./lottie/dataend.json') : import('./lottie/datastart.json');
    }
    // Return null for SVG usage on mobile
    return null;
  };

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const data = await getAnimationData();
        setAnimationData(data?.default || null); // Set to null for SVG on mobile
      } catch (error) {
        console.error("Failed to load animation data:", error);
      }
    };

    if (inView) {
      loadAnimation();
    }
  }, [size, showData2, inView]);

  return (
    <section id="hero" className={s.main} ref={ref}>
      <div onClick={() => scrollTo({ top: window.innerHeight, behavior: "smooth" })} className={s.arrow}>
        <HeroArrowDown />
      </div>
      <div className={s.lottie}>
        {(size?.width ?? 0) > 640 ? (
          animationData && (
            <Lottie
              options={{
                loop: showData2,
                autoplay: true,
                animationData: animationData,
              }}
            />
          )
        ) : (
          <img style={{
            width: '80%',       // Adjust as necessary for responsiveness
            height: 'auto',     // Maintain aspect ratio
            display: 'block',
            margin: '0 auto'    // Center the image horizontally
          }} src="/datam1.svg" alt="Mobile Animation" />
        )}
      </div>
    </section>
  );
};

export default memo(Hero);
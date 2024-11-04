import "@/styles/globals.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { AppProps } from "next/app";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout/Layout";
import { useScrollTo } from "react-use-window-scroll";
import Bauhas from "./work/bauhas";
import Everphone from "./work/everphone";
import Monipol from "./work/monipol";
import Myndyoga from "./work/myndyoga";
import Vermietet from "./work/vermietet";
import WWTF from "./work/wwtf";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  const lenisRef = useRef<any>();
  const scrollTo = useScrollTo();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/work/bauhas" element={<Bauhas />} />
          <Route path="/work/everphone" element={<Everphone />} />
          <Route path="/work/monipol" element={<Monipol />} />
          <Route path="/work/myndyoga" element={<Myndyoga />} />
          <Route path="/work/vermietet" element={<Vermietet />} />
          <Route path="/work/wwtf" element={<WWTF />} />
        </Routes>
      </BrowserRouter> */}
    </ReactLenis>
  );
}

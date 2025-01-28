"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeaderContextProvider from "@/context_api/HeaderContext";
import { useEffect, useState } from "react";
import Preloader from "../others/Preloader";
import BackToTop from "../others/BackToTop";
import smoothScroll from "@/libs/smoothScroll";
import PortfolioRenderContextProvider from "@/context_api/PortfolioRenderContext";
import FooterContextProvider from "@/context_api/FooterContext";

const PageWrapper = ({
  children,
  isIndexPage,
  isInnerPage,
  isResumeBtn,
  footerType,
}) => {
  useEffect(() => {
    import("wow.js").then(({ default: WOW }) => {
      new WOW().init();
    });
    smoothScroll();
  }, []);
  return (
    <div>
      <Preloader />

      <BackToTop />
      <HeaderContextProvider value={{ isIndexPage, isInnerPage, isResumeBtn }}>
        <Header />
        <Header isSticky={true} />
      </HeaderContextProvider>
      <PortfolioRenderContextProvider>
        {children ? children : ""}
      </PortfolioRenderContextProvider>
      <FooterContextProvider value={{ footerType }}>
        <Footer />
      </FooterContextProvider>
    </div>
  );
};

export default PageWrapper;

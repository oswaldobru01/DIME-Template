"use client";

import { serviceBgAnimation } from "@/libs/bgAnimation";
import { useEffect } from "react";

const ActiveBg1 = () => {
  useEffect(() => {
    serviceBgAnimation();
  }, []);
  return (
    <div
      className="active-bg wow fadeInUp hidden sm:block"
      data-wow-delay=".6s"
    ></div>
  );
};

export default ActiveBg1;

"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const FunFact = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(14);
      setValue2(50);
      setValue3(1.5);
      setValue4(14);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div className="funfact-area mt-60px xl:mt-70px 2xl:mt-30">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-30px text-primary-color dark:text-body-color">
            <div className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em] inline-flex items-end"
                  value={value}
                />
              </div>
              <div className="text">
                Years of <br />
                Experience
              </div>
            </div>

            <div className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em]"
                  value={value2}
                />{" "}
                <span className="symbol"> +</span>
              </div>
              <div className="text">
                Project <br />
                Completed
              </div>
            </div>

            <div className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em]"
                  value={value3}
                />{" "}
                <span className="symbol">K</span>
              </div>
              <div className="text">
                Happy <br />
                Clients
              </div>
            </div>

            <div className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em]"
                  value={value4}
                />
              </div>
              <div className="text">
                Years of <br />
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFact;

/* eslint-disable react/no-unescaped-entities */
"use client";
import { hello } from "@/models/constants";
import React, { useState, useEffect } from "react";
import { motion, useTransform, useScroll, clamp } from "framer-motion";
import Typical from "react-typical";
import Technologies from "@/components/Technologies";

const Home: React.FC = () => {
  const [height, setHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const sectionHeight = height;
  const maxScroll = sectionHeight * 2;

  const y1 = useTransform(scrollY, [0, maxScroll], [0, -maxScroll]);
  const clampedY1 = useTransform(y1, (value) => clamp(value, 0, maxScroll));

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500 to-green-500"
        style={{
          translateY: clampedY1,
        }}
      />
      <motion.div
        className="relative h-screen flex flex-col items-center justify-center"
        style={{ zIndex: 1, translateY: clampedY1 }}
      >
        <div className="text-6xl font-bold text-white mb-6">{hello}</div>
        <div className="text-4xl font-semibold text-white">
          I'm a{" "}
          <Typical
            wrapper="span"
            steps={["Front End", 2000, "Back End", 2000, "Full Stack", 6000]}
          />{" "}
          Software Developer
        </div>
      </motion.div>
      <motion.div
        className="relative h-screen flex items-center justify-center"
        style={{ zIndex: 1, translateY: clampedY1 }}
      >
        <Technologies />
      </motion.div>
    </div>
  );
};

export default Home;

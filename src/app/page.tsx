"use client"
import { hello, introduction } from "@/models/constants";
import React, { useState, useEffect } from "react";
import { motion, useTransform, useScroll, clamp } from "framer-motion";

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
        className="relative h-screen flex items-center justify-center"
        style={{ zIndex: 1, translateY: clampedY1 }}
      >
        <h1 className="text-6xl font-bold text-white">{hello}</h1>
      </motion.div>
      <motion.div
        className="relative h-screen flex items-center justify-center"
        style={{ zIndex: 1, translateY: clampedY1 }}
      >
        <h1 className="text-4xl font-semibold text-white">{introduction}</h1>
      </motion.div>
    </div>
  );
};

export default Home;

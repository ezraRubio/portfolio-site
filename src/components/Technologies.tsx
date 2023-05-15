import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaCss3Alt,
  FaJira,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiFigma,
  SiSwift,
} from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";

const technologies = [
  { icon: SiJavascript, name: "Javascript" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: FaReact, name: "React" },
  { icon: TbBrandReactNative, name: "React Native" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: TbBrandFramerMotion, name: "Framer Motion" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaAws, name: "AWS" },
  { icon: FaJira, name: "Jira" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaPython, name: "Python" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiSwift, name: "Swift"}
];
const duplicate = [
  ...technologies,
  ...technologies,
  ...technologies,
  ...technologies,
  ...technologies,
];
const Technologies: React.FC = () => {
  const { scrollX } = useScroll();
  const xOffset = useTransform(
    scrollX,
    [0, 1],
    [
      (1 * (technologies.length * 200)) % window.innerWidth,
      window.innerWidth - 200,
    ]
  );

  return (
    <motion.div
      className="flex flex-row items-center justify-center w-full h-full space-x-10"
      style={{ x: xOffset }}
      animate={{ x: -1 * (technologies.length * 200) }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 20,
      }}
    >
      {duplicate.map(({ icon: Icon, name }, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center text-white text-semibold text-2xl m-6"
          whileHover={{ scale: 1.2 }}
        >
          {name}
          <Icon className="text-6xl text-white" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Technologies;

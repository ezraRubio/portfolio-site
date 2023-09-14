import { ButtonOptions } from "@/models/enums";
import React from "react";

interface ButtonProps {
  title: ButtonOptions;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <a
      href={link}
      className="bg-blue-500 hover:bg-blue-700 w-2/5 md:w-1/6 text-white text-center font-semibold py-2 px-4 rounded"
      target="_blank"
    >
      {title}
    </a>
  );
};

export default Button;

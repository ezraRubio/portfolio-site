"use client";
import { ButtonOptions } from "@/models/enums";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white text-center text-xs sm:text-base font-semibold py-2 px-4 rounded"
    >
      {pending ? ButtonOptions.SENDING : ButtonOptions.SEND}
    </button>
  );
};

export default SubmitFormButton;

import React from "react";
import { ButtonOptions } from "@/models/enums";
import submitContactForm from "@/actions/submitContactForm";

const ContactForm = () => {
  return (
    <form
      className="mt-20 flex flex-col space-y-2 max-w-xs"
      action={submitContactForm}
    >
      <legend className="text-center">Contact Form</legend>
      <label className="ml-4" id="name">
        Name:
        <input
          id="name"
          name="name"
          type="text"
          className="ml-4 border border-solid rounded"
        />
      </label>
      <label className="ml-4" id="mail">
        Mail:
        <input
          id="mail"
          name="mail"
          type="text"
          className="ml-4 border border-solid rounded"
        />
      </label>
      <label className="ml-4" id="message">
        Message:
      </label>
      <textarea
        id="message"
        rows={5}
        name="message"
        className="mx-4 border border-solid rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white text-center text-xs sm:text-base font-semibold py-2 px-4 rounded"
      >
        {ButtonOptions.SEND}
      </button>
    </form>
  );
};

export default ContactForm;

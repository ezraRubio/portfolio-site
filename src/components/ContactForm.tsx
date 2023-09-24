import React from "react";
import submitContactForm from "@/actions/submitContactForm";
import SubmitFormButton from "./SubmitFormButton";

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
          required
          id="name"
          name="name"
          type="text"
          className="ml-4 border border-solid rounded"
        />
      </label>
      <label className="ml-4" id="mail">
        Mail:
        <input
          required
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
        required
        id="message"
        rows={5}
        name="message"
        className="mx-4 border border-solid rounded"
      />
      <SubmitFormButton />
    </form>
  );
};

export default ContactForm;

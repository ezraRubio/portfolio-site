import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { GITHUB, LINKEDIN } from "@/models/constants";
import { ButtonOptions } from "@/models/enums";

function Contact() {
  return (
    <div className="ml-10 mt-20">
      <div className="flex flex-row space-x-4">
        <Button link={LINKEDIN} title={ButtonOptions.LINKEDIN} />
        <Button link={GITHUB} title={ButtonOptions.GITHUB} />
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;

import Button from "@/components/Button";
import { GITHUB, LINKEDIN } from "@/models/constants";
import { ButtonOptions } from "@/models/enums";

function Contact() {
  return (
    <div className="ml-10 mt-20">
      <h2 className="font-semibold"> Ezra Rubio </h2>
      <p className="m-6">
        For inquiries:
        <p className="font-medium"> ezra@ezrarubio.com</p>
        <p className="font-medium"> 0585504711 </p>
      </p>
      <div className="flex flex-row space-x-4">
        <Button link={LINKEDIN} title={ButtonOptions.LINKEDIN} />
        <Button link={GITHUB} title={ButtonOptions.GITHUB} />
      </div>
    </div>
  );
}

export default Contact;

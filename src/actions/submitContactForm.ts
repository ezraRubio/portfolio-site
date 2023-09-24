"use server";
import nodemailer from "nodemailer";
import Mail from 'nodemailer/lib/mailer';

const transporter = nodemailer.createTransport({
    service: "iCloud",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
})

interface inquiryMessage {
  name: string;
  mail: string;
  message: string;
}

const formatJson = (data: FormData): inquiryMessage => {
    let dataToSend: inquiryMessage = {name:"",mail:"", message:""};
    data.forEach((name, value) => {
      if (!name) return;
      dataToSend = {
        ...dataToSend,
        [value]: name,
      };
    });
    return dataToSend;
  };

const submitContactForm = async (data: FormData) => {
  let {name, mail, message} = formatJson(data);

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${name} (${mail})`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions)

  } catch (error) {
    console.log("error sending email", error)
  }
};

export default submitContactForm;

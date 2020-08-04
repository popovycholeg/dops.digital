import emailjs from "emailjs-com";
const SERVICE_ID = "gmail"; // TODO: .env
const TEMPLATE_ID = "template_DugYMfs6";
const USER_ID = "user_3KqraVJGAElV0iG2hXQZu";

export const sendMail = (templateParams) => {
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (err) => {
      console.log("FAILED...", err);
    }
  );
};

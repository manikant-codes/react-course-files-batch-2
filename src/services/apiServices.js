import emailjs from "@emailjs/browser";

export async function sendMail(form) {
  console.log(process.env);
  const response = await emailjs.sendForm(
    process.env.REACT_APP_EJS_SERVICE_ID,
    process.env.REACT_APP_EJS_TEMPLATE_ID,
    form,
    {
      publicKey: "",
      // publicKey: process.env.REACT_APP_EJS_PUBLIC_KEY,
    }
  );
  return response;
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const my_email = import.meta.env.VITE_EMAIL_ADDRESS;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [alert, showAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("success");
  const showAlertMessage = (text, type) => {
    setAlertText(text);
    setAlertType(type);
    showAlert(true);
    setTimeout(() => {
      showAlert(false);
    }, 5000);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(formData);
      await emailjs.send(
        "service_250u9y8",
        "template_cpj2v3p",
        {
          from_name: formData.name,
          to_name: "Shreyas Kulkarni",
          message: formData.message,
          form_email: formData.email,
          to_email: my_email,
        },
        "nPgmdAdaVCMskQ9Dv"
      );
      setIsLoading(false);
      showAlertMessage("Message sent! The Force was with you", "success");
      // Reset form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage(
        "Failed to send message! The force is not with you.",
        "danger"
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  // service_250u9y8
  // template_cpj2v3p
  return (
    <section className="relative flex items-center justify-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={300}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {alert && <Alert text={alertText} type={alertType} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Lets chat!</h2>
          <p className="font-normal text-neutral-300">
            I am always open to discussing new projects, creative ideas or
            opportunities to be part of your vision. Feel free to reach out to
            me via email
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="Luke Skywalker"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="darthvader99@notAjedi.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              type="textarea"
              id="message"
              rows={4}
              autoComplete="message"
              name="message"
              className="field-input field-input-focus"
              placeholder="Message you must, if you want to know more"
              required
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button
            type="submit"
            className="w-full px-2 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!loading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const config = {
    email: "harivignesh0506@gmail.com",
    phone: "86674-13356",
    location: "A-110, Travancore Apartment, Kattankulathur, Potheri, Chennai-603203",
  };

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage(null);

    emailjs
      .sendForm("service_f13zp8p", "template_f9bsdun", form.current, "FE8REB9mn6eLY-KJF")
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData(initialState);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error(error.text);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="con"
      className="flex flex-col items-center bg-gradient-to-r from-[#e8eaf6] to-[#9ba7c4] px-5 py-16"
    >
       <ToastContainer />
      <div className="text-center mb-10">
        <h1 className="text-4xl border-b-4 inline-block font-bold text-black">
          Contact
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-8">
        <div className="md:w-1/2 w-full px-5">
          <div className="text-center md:text-left text-[#000000]">
            <p className="pb-5 text-lg text-black">
              I’d love to hear from you! Whether you’re looking to collaborate on a project, have a job opportunity, or wish to discuss potential work, feel free to get in touch.
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span className="font-bold bg-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                  <MdOutlineMail />
                </span>
                <a href={`mailto:${config.email}`} className="hover:text-blue-800">
                  {config.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold bg-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                  <MdOutlineLocalPhone />
                </span>
                <a href={`tel:${config.phone}`} className="hover:text-blue-800">
                  {config.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold bg-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                  <IoLocationOutline />
                </span>
                <span>{config.location}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-sm shadow-lg p-8 w-full md:w-1/2">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number *"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded w-full h-32"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-[#909ebd] text-black font-bold px-6 py-3 rounded-full hover:bg-[#9ba7c4] transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
       
        </div>
      </div>
    </section>
  );
};

export default Contact;

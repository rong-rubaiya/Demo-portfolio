import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sqsphf3", // your Service ID
        "YOUR_TEMPLATE_ID", // your Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // your Public Key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-20">
      <motion.h2
        className="text-5xl font-bold mb-12 text-[#f89ff8] text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-6 bg-gray-100/10 p-6 rounded-2xl border border-white/20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 text-lg">
            <FaPhone className="text-[#f89ff8]" /> <span>Phone: 01883013411</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaWhatsapp className="text-[#f89ff8]" /> <span>WhatsApp: 01616771960</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaEnvelope className="text-[#f89ff8]" /> <span>Email: rongrubaiya@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaMapMarkerAlt className="text-[#f89ff8]" /> <span>Location: Jatrabari, Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100/10 p-6 rounded-2xl border border-white/20 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label className="text-gray-200/70">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#f89ff8] outline-none"
            />
          </div>

          <div>
            <label className="text-gray-200/70">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#f89ff8] outline-none"
            />
          </div>

          <div>
            <label className="text-gray-200/70">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#f89ff8] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#f89ff8]/20 text-[#f89ff8] font-semibold rounded-lg border border-[#f89ff8]/40 hover:bg-[#f89ff8]/40 transition-colors"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-400 text-center mt-2">
              ✔ Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

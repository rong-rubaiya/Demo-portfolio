import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();

          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#f89ff8",
            background: "#0f0f13",
            color: "#e5e7eb",
          });
        },
        (error) => {
          console.error("Email send error:", error);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again.",
            confirmButtonColor: "#f89ff8",
            background: "#0f0f13",
            color: "#e5e7eb",
          });
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-20">
      <motion.h2
        className="text-5xl font-bold mb-12 text-[#750075] dark:text-[#f89ff8] text-center w-11/12 mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-6 bg-pink-100 dark:bg-gray-100/10 p-6 rounded-2xl border border-white/20"
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
            <FaMapMarkerAlt className="text-[#f89ff8]" />{" "}
            <span>Location: Jatrabari, Dhaka, Bangladesh</span>
          </div>
           <div className="mt-10 w-full h-80 rounded-2xl overflow-hidden border border-gray-300">
        <iframe
          title="Jatrabari Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.905246314124!2d90.41445251542382!3d23.727268594699963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70b8f5d91b3%3A0x62f8b5f3b4a3e0!2sJatrabari%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-pink-100 dark:bg-gray-100/10 p-6 rounded-2xl border border-white/20 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label>Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full mt-1 p-3 rounded-lg border-1 focus:border-[#f89ff8] outline-none"
            />
          </div>

          <div>
            <label>Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full mt-1 p-3 rounded-lg border-1 focus:border-[#f89ff8] outline-none"
            />
          </div>

          <div>
            <label>Your Location</label>
            <input
              type="text"
              name="user_location"
              placeholder="City, Country"
              required
              className="w-full mt-1 p-3 rounded-lg border-1 focus:border-[#f89ff8] outline-none"
            />
          </div>

          <div>
            <label>Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-1 p-3 rounded-lg border-1 focus:border-[#f89ff8] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="relative overflow-hidden rounded-xl px-6 py-3 font-semibold text-white
               bg-[#750075] dark:bg-[#f89ff8] 
               shadow-lg shadow-pink-400/50
               before:absolute before:top-0 before:left-[-75%] before:h-full before:w-3/4 
               before:bg-white before:opacity-10 before:rotate-12
               hover:before:animate-swipe
               transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Map */}
     
    </section>
  );
};

export default Contact;

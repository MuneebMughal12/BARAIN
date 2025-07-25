import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        formData,
        type,
      });

      if (response.status === 200) {
        alert("Email Sent Successfully!");
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div style={{ fontFamily: "Montserrat", textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>

      <div className="bg-[#0C1E1E] text-white px-2 ">
        {/* Hero Section */}
        <div className="text-center py-16" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          <h3 className="text-2xl uppercase">Let's Connect</h3>
          <h1 className="text-5xl font-bold">INTERESTED IN SKY-LIVING</h1>
          <p className="mt-4 text-2xl">
            We are here for your assistance. Please find our contact details
            mentioned below.
          </p>
          <p className="font-semibold italic">See You Soon!</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Address and Info */}
        <motion.div className="bg-white text-black p-8 rounded-lg shadow-2xl h-full"
           initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          >
          <h2 className="text-[1.7rem] font-semibold mb-4">Contact Information</h2>

          <p className="mb-2 text-2xl font-bold">Office Address:</p>
          <p className="text-lg">House No.1874-C, Main, 3 Double Road, I-14, Islamabad, 44000, Pakistan </p>
          <p className="mb-2 text-2xl font-bold">Side Address:</p>
          <p className="text-lg"> Mohra Bhatian, Murree, 47150, Pakistan</p>

          <p className="mt-4 text-2xl font-bold">Phone/WhatsApp:</p>
          <p className="text-lg">+92-333-3404585 <br />
            +92-308-8528128
          </p>

          <p className="mt-4 text-2xl font-bold">Email:</p>
          <p className="text-lg">geoconenterprises@outlook.com</p>

          <p className="mt-4 text-3xl font-bold">Social Media:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/Geogroupofcompanies2022" className="text-4xl text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/geocon_enterprises" className="text-4xl text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@geocone_enterprises?is_from_webapp=1&sender_device=pc" className="text-4xl text-black hover:text-pink-600">
              <FaTiktok />
            </a>
          </div>
        </motion.div >

        {/* Contact Form */}
        <motion.div className="bg-white text-black p-8 rounded-lg shadow-2xl h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={(e) => handleSubmit(e, "contact")}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Write a message"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              rows="4"
            ></textarea>
            <button className="px-6 py-2 mt-4 text-white bg-black rounded-full hover:bg-white hover:text-black border border-black">
              Submit
            </button>
          </form>
        </motion.div >
      </div>

      {/* Google Map */}
      <div className="w-full h-96 mt-8">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4124.0286187842685!2d73.3843954!3d33.952307299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd74bff62556b%3A0x5e362534a98e4f4a!2sBarian%20Pine%20Lodges%20Murree!5e1!3m2!1sen!2s!4v1753107371738!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Forms;

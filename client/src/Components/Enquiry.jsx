import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="bg-black mt-1 font-montserrat">
      <div className="w-full bg-[#142B2B] py-10 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* YouTube Video */}
          <motion.div
            className="w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center lg:text-left">
              VALOR VISTA
            </h2>
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/oZQFdHc-voo"
                title="VALOR VISTA Video"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            className="text-white p-6 w-full rounded-lg mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">ENQUIRY</h2>
            <form onSubmit={(e) => handleSubmit(e, "enquiry")} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                  className="p-3 w-full bg-white text-black rounded-md"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  className="p-3 w-full bg-white text-black rounded-md"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email *"
                onChange={handleChange}
                className="p-3 w-full bg-white text-black rounded-md"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Phone *"
                onChange={handleChange}
                className="p-3 w-full bg-white text-black rounded-md"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                placeholder="Message"
                rows="3"
                onChange={handleChange}
                className="p-3 w-full bg-white text-black rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-[#c08d31] hover:text-white text-white py-3 rounded-md font-semibold"
              >
                SEND ENQUIRY
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Forms;

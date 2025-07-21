import React, { useState } from "react";
import { motion } from "framer-motion";

const CallBackForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && contact.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setName("");
        setContact("");
        setSubmitted(false);
      }, 2000);
    }
  };

  // common animation settings
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[43vh] justify-center py-10 px-4 gap-y-8">
      {/* Heading */}
      <motion.h2
        {...fadeUp}
        className="text-3xl md:text-4xl font-bold text-center md:text-left w-full md:w-2/4 mb-6"
      >
        GET A CALL BACK!
      </motion.h2>

      {/* Form */}
      <motion.form
        {...fadeUp}
        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-screen-lg"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer border-b border-black focus:outline-none focus:border-gray-800 w-full text-lg md:text-xl p-2 placeholder-gray-500"
          />
        </div>

        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            required
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="peer border-b border-black focus:outline-none focus:border-gray-800 w-full text-lg md:text-xl p-2 placeholder-gray-500"
          />
        </div>
      </motion.form>

      {/* Submit Button */}
      <motion.button
        {...fadeUp}
        type="submit"
        onClick={handleSubmit}
        className="w-full md:w-auto px-6 py-3 bg-black text-white border-2 border-black rounded-full hover:bg-[#c08d31] hover:text-black transition duration-300"
      >
        Submit
      </motion.button>

      {/* Confirmation */}
      <motion.p
        {...fadeUp}
        className="text-green-600 text-lg font-medium"
      >
        {submitted && "Thank you! We'll call you soon."}
      </motion.p>
    </div>
  );
};

export default CallBackForm;

import React, { useState, useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import { motion } from 'framer-motion';

export default function SuccessMessage() {
    const [showMessage, setShowMessage] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 800000); // Adjust the duration (in milliseconds) as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    return showMessage ? (
    <section className="flex justify-center items-center h-full">
      <motion.div 
      className="flex bg-white border border-black/[0.1] rounded-xl px-5 py-3"
        initial={{ y: 100, left: "50%", x: "-50%", opacity: 0 }}
        animate={{ y: 35, x: "-50%", opacity: 1 }}
        style={{ position: "absolute" }}
        >
        <p className="text-green-600 mr-2 opacity-80">Email sent successfully!</p>
        <div className="opacity-80">
          <FcCheckmark size="1.5rem" />
        </div>
      </motion.div>
    </section>
    ) : null;
  }

"use client";

import React, {useRef, useState} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import SuccessMessage from "@/actions/success";
//import { FcCheckmark } from "react-icons/fc";


export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef <HTMLFormElement> (null);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
    } else {
      setEmailSent(true); // Update state variable when email is successfully sent
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly <a className="underline" href="mailto:siobhan.leese@hotmail.co.uk">here</a>{" "}or through this form.
      </p>

      <form className="mt-6 flex flex-col dark:text-black"
          onSubmit={handleSubmit}
          ref={formRef}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>

      <section>
        {emailSent && <SuccessMessage />}
      </section>
      
    </motion.section>
  );
}
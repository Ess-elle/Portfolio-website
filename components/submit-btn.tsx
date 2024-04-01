import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-200 border-2 border-gray-300 text-gray-700 rounded-full transition-all focus:scale-110 hover:scale-105 hover:bg-gray-300 hover:border-gray-400 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0" />{" "}
        </>
      )}
    </button>
  );
}
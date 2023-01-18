import React, { useState } from "react";

function FaqItem({ question, answer }) {
  let [show, setShow] = useState(false);
  return (
    <div className="border-b-2 border-bg mt-5 pb-5 md:pb-8 md:mt-8">
      <div className="flex items-center heading-bg">
        <i
          onClick={() => setShow(!show)}
          className={`fa-solid ${show ? "fa-minus" : "fa-plus"} w-8`}
        ></i>
        <h1 className="font-semibold text-lg md:text-xl">{question}</h1>
      </div>
      <p className={`transition-all ml-2 sm:ml-8 pl-5 border-l-2 border-gray-500 ${!show ? "h-0 overflow-hidden" : "mt-8"}`}>{answer}</p>
      {/* {show && (
        <p className="ml-8 pl-5 border-l-2 mt-8 border-gray-500">
          {answer}
        </p>
      )} */}
    </div>
  );
}

export default FaqItem;

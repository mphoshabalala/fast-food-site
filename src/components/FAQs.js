import React, { useState } from "react";
import { useFAQs } from "../contexts/FAQsContext";

export default function FAQs() {
  const { questions } = useFAQs();
  const [openItems, setOpenItems] = useState(
    new Array(questions.length).fill(false)
  );
  function toggleItems(index) {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  }
  return (
    <div className="flex flex-col p-16 text-gray-800">
      <h1 className="text-3xl font-bold">Frequently Asked Questions.</h1>
      <div>
        {questions.map((question, index) => (
          <div
            onClick={() => toggleItems(index)}
            key={question.question}
            className="border-t-invitingYellow border-t-4 py-4  bg-gray-200 pl-2 rounded-b-lg pr-8 cursor-pointer  my-4 flex flex-col"
          >
            <div className="flex justify-between ">
              <h2 className="font-bold text-2xl">{question.question}</h2>
              <button className="font-bold text-2xl pl-4">
                {!openItems[index] ? "+" : "-"}
              </button>
            </div>
            {openItems[index] && (
              <p className="font-bold text-gray-600">{question.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

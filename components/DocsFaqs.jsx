import React, { useState } from "react";

const faqs = [
  {
    question: "What is React Ready?",
    answer:
      "React Ready is a collection of ready-to-use React components, each with step-by-step tutorials and detailed documentation, helping developers build faster and more efficiently.",
  },
  {
    question: "How do I use React Ready?",
    answer:
      "You can simply start by checking out the Components tab and picking one to start with.",
  },
  {
    question: "Are the components customizable?",
    answer:
      "Yes! Every component is designed to be flexible. You can override styles, pass props, and combine components to suit your project's design requirements.",
  },
  {
    question: "Do the components come with documentation?",
    answer:
      "Absolutely. Each component includes usage instructions, live examples, and explanations so you can understand and implement them easily.",
  },
  {
    question: "Can I use React Ready in production?",
    answer:
      "Yes! All components are production-ready and tested for reliability, performance, and responsiveness.",
  },
];

const DocsFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl min-w-2xl  mx-auto py-10 px-4 bg-blue-200">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md shadow-sm">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center rounded bg-blue-100 hover:bg-blue-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white border-t rounded">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocsFAQs;

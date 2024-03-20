import  { useState } from 'react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); // State to track open index

  // Function to toggle the visibility of the answer for a specific index
  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id='faq' className="bg-white overflow-hidden font-serif "
   
    >
      <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 pb-10">Frequently Asked <span className='text-[#7ccce4
]'
style={{
  color: "#5db2cf"
}}
>Questions</span></h2>
        <div className="mt-4">
          <div className="border-t border-gray-200 pt-2">
            <dl className="divide-y divide-gray-200">
              {faqData.map((faq, index) => (
                <div key={index} className="py-2 ease-in">
                  <dt
                    className="text-lg leading-6 font-medium text-gray-900 flex justify-between cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
                  </dt>
                  {openIndex === index && (
                    <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

// Example data for FAQ items
const faqData = [
  {
    question: 'What is E-Summit?',
    answer:
      'E-Summit is an annual entrepreneurship summit organized by KIET ECELL. It brings together entrepreneurs, investors, and industry experts to share knowledge and network.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },

  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  // Add more FAQ items here as needed
];

export default FAQSection;

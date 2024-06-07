import { useState } from "react";

function AccordionPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title:
        "Are there any special discounts or promotions available during the event?",
      content:
        "Yes, we offer special discounts and promotions during our events. Be sure to subscribe to our newsletter and follow us on social media to stay updated on the latest offers.",
    },
    {
      title: "What are the dates and locations for the product launch events?",
      content:
        "Our product launch events are held at various times throughout the year at different locations. Please check our events page for the most current information on dates and locations.",
    },
    {
      title: "Can I bring a guest with me to the product launch event?",
      content:
        "Absolutely! We encourage you to bring friends and family to our product launch events. Please note that some events may require RSVP, so be sure to check the event details.",
    },
    {
      title: "What is your return policy?",
      content:
        "We offer a hassle-free 15-day return policy. If you are not satisfied with your purchase, you can return the product within 15 days for a full refund or exchange. Please visit our returns page for more details.",
    },
    {
      title: "Is the checkout process secure?",
      content:
        "Yes, our checkout process is 100% secure. We use advanced encryption technology to protect your personal and payment information. Shop with confidence knowing your data is safe with us.",
    },
    {
      title: "Can I hire you to build this website for me?",
      content:
        "Why not? I can send you my CV and other portfolios, then you make a more informed decision. Let me know how fast we can schedule an interview",
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mt-8">
          FAQs
        </h2>
        <div className="bg-gray-50 grid lg:grid-cols-2 gap-6 sm:px-8 px-4 py-16 font-[sans-serif] text-[#333]">
          {accordionData.map((item, index) => (
            <div className="space-y-6" key={index}>
              <div
                className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg transition-all"
                role="accordion"
              >
                <button
                  type="button"
                  className="accordion-button w-full text-base font-semibold text-left p-6 text-blue-600 flex items-center hover:text-blue-600 transition-all"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="mr-4">{item.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-current ml-auto shrink-0"
                    viewBox="0 0 124 124"
                  >
                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                  </svg>
                </button>
                <div
                  className={`accordion-content pb-5 px-6 ${
                    activeIndex === index ? "" : "hidden"
                  }`}
                >
                  <p className="text-sm text-gray-500">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AccordionPage;

import React from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const faqData = [
        {
            id: 1,
            question: "How do your solutions bridge veterinary science with everyday animal care?",
            answer: "We formulate our products by combining advanced laboratory research with real-world farm logistics. This ensures our medicine is highly effective under diverse climate conditions while remaining easy for farm operators to safely administer."
        },
        {
            id: 2,
            question: "Are your production lines compliant with nationwide regulatory standards?",
            answer: "Yes, absolutely. Every solution, including our targeted biosecurity lines like ImuLiv, is manufactured under strict industrial certifications to ensure maximum clinical efficacy, farm safety, and standardized nutrient values."
        },
        {
            id: 3,
            question: "How does working hand-in-hand with farmers influence your product development?",
            answer: "Direct feedback from farmers helps us adjust everything from our minimum order quantities (MOQ) to pack sizes (like our 1 Litre and 5 Litres options), making sure our inventory layouts perfectly fit modern agricultural demands."
        },
        {
            id: 4,
            question: "Can I manage multiple livestock species with a single supplement formulation?",
            answer: "Many of our formulas are engineered for diverse herd or flock management setups. Clear dilution scales (such as dedicated inclusion rates for chicks, growers, and layers) are always explicitly marked for optimal farm deployment."
        },
        {
            id: 5,
            question: "What is your vision for future innovations in animal healthcare?",
            answer: "We are actively developing natural performance boosters and advanced liver protection solutions to counter the increasing reliance on toxic chemicals in global animal feed, prioritizing long-term livability."
        },
        {
            id: 6,
            question: "How should your liquid solutions be stored to ensure their clinical lifespan?",
            answer: "To preserve chemical stability, all items must be kept sealed in a cool, dry environment away from direct solar radiation. Always follow the specific farm safety logistics provided with each product batch."
        }
    ];

    // Splitting the 6 FAQs into 2 columns (3 items per column)
    const leftColumnFaqs = faqData.slice(0, 3);
    const rightColumnFaqs = faqData.slice(3, 6);

    return (
        <section className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-12  bg-[#f5e6f5]">
            {/* Header Area */}
            <div className="text-center space-y-3 mb-10">
                <span className="text-xs uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md inline-block">
                    Support Matrix
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#232323] tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#444444]">
                    Have questions about our veterinary solutions, manufacturing logistics, or inclusion rates? Explore our technical documentation framework below.
                </p>
            </div>

            {/* 3 Rows, 2 Columns FAQ Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
                
                {/* Left Column (Row 1, 2, 3) */}
                <div className="space-y-4">
                    {leftColumnFaqs.map((faq) => (
                        <div 
                            key={faq.id} 
                            className="collapse collapse-plus border border-base-200  bg-[#f5e6f5] rounded-xl shadow-sm transition-all duration-200 hover:border-base-300"
                        >
                            <input type="checkbox" name={`faq-accordion-${faq.id}`} /> 
                            <div className="collapse-title text-sm sm:text-base font-bold text-[#232323] pr-12 flex items-center gap-2.5">

                                <span>{faq.question}</span>
                            </div>
                            <div className="collapse-content text-sm text-[#444444] leading-relaxed pl-9">
                                <p className="pt-1 border-t border-base-100">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column (Row 1, 2, 3) */}
                <div className="space-y-4">
                    {rightColumnFaqs.map((faq) => (
                        <div 
                            key={faq.id} 
                            className="collapse collapse-plus border border-base-200  bg-[#f5e6f5] rounded-xl shadow-sm transition-all duration-200 hover:border-base-300"
                        >
                            <input type="checkbox" name={`faq-accordion-${faq.id}`} /> 
                            <div className="collapse-title text-sm sm:text-base font-bold text-[#232323] pr-12 flex items-center gap-2.5">

                                <span>{faq.question}</span>
                            </div>
                            <div className="collapse-content text-sm text-[#444444] leading-relaxed pl-9">
                                <p className="pt-1 border-t border-base-100">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
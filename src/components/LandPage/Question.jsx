import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
    const faqs = [
        {
            question: "Q1. What is ACCESS home lab collection service?",
            answer: "We are the home collection service provider across different cities in Kerala. We simplify lab testing for customers by collecting the test samples from their home or office & getting those tested at any lab of customer's choice."
        },
        {
            question: "Q2. How can I book a home collection?",
            answer: "We are the home collection service provider across different cities in Kerala. We simplify lab testing for customers by collecting the test samples from their home or office & getting those tested at any lab of customer's choice."
        },
        {
            question: "Q3. Is there any collection charge?",
            answer: "We are the home collection service provider across different cities in Kerala. We simplify lab testing for customers by collecting the test samples from their home or office & getting those tested at any lab of customer's choice."
        },
        {
            question: "Q4. Can I get covid tests at home?",
            answer: "We are the home collection service provider across different cities in Kerala. We simplify lab testing for customers by collecting the test samples from their home or office & getting those tested at any lab of customer's choice."
        },
        {
            question: "Q5. How long does it take to get the test reports?",
            answer: "We are the home collection service provider across different cities in Kerala. We simplify lab testing for customers by collecting the test samples from their home or office & getting those tested at any lab of customer's choice."
        }
    ];

    const [expandedIndex, setExpandedIndex] = useState(0); // Only the first question is expanded by default

    const toggleFAQ = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    return (
        <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-textColor">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-6 shadow-lg border rounded-lg overflow-hidden">
                        <div
                            className="cursor-pointer bg-white p-4 flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-xl font-semibold">{faq.question}</h3>
                            <FontAwesomeIcon
                                icon={expandedIndex === index ? faChevronUp : faChevronDown}
                                className="text-gray-700"
                            />
                        </div>
                        {expandedIndex === index && (
                            <div className="bg-white p-4">
                                <p className="text-base text-gray-700">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;

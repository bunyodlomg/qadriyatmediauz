import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Ekranda videolar kuniga necha marta ko'rsatiladi?",
            answer: "Og'ir yuk bilan 150 martadan, o'rtacha yuk bilan 250 martadan va minimal yuk bilan 300 martadan kafolatlangan."
        },
        {
            question: "Sizda chegirmalar bormi?",
            answer: "Albatta, chegirmalar mavjud va ular xarid hajmiga bog'liq. Chegirmalar haqida batafsil ma'lumotni quyidagi telefon orqali bilib olishingiz mumkin: +998 91 691 91 91."
        },
        {
            question: "O‘zbekiston viloyatlarida ekranlar bormi?",
            answer: "Biz faqat viloyatlarda faoliyat yuritamiz va Toshkentda ham ekranimiz bor."
        },
        {
            question: "Ekranlar 24/7 ishlaydimi?",
            answer: "Ruxsat etilgan efir vaqti: 07:00 dan 23:00 gacha (yozda) va 07:00 dan 22:00 gacha (qishda)."
        }
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-16">
            <div className="mx-auto px-6 lg:px-16 container">
                <h2 className="mb-8 font-bold text-4xl text-center text-gray-800 dark:text-white">
                    Tez-tez so'raladigan savollar
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border ${
                                activeIndex === index ? "border-brand" : "border-gray-300"
                            } bg-white dark:bg-gray-800 shadow rounded-lg`}
                        >
                            <button
                                className="flex justify-between items-center px-4 py-4 w-full font-medium text-gray-800 text-left dark:text-gray-200 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span
                                    className={`transform transition-transform duration-1000 ${
                                        activeIndex === index ? "rotate-180" : ""
                                    }`}
                                >
                                    <FaAngleDown />
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-1000 ${
                                    activeIndex === index
                                        ? "max-h-40 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="px-4 pb-4 text-gray-600 dark:text-gray-400">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

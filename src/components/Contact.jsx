const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "dc60972d-dd6a-43c5-b90a-c242fe514e6a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Xabaringiz yuborildi. Rahmat!");
            event.target.reset(); // Formani tozalash
        } else {
            alert("Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
        }
    };

    return (
        <section id="contact" className="py-16">
            <div className="mx-auto px-6 lg:px-16 container">
                <h2 data-aos="fade-up" data-aos-duration="1000" className="mt-12 mb-8 font-bold text-4xl text-center text-gray-800 dark:text-white">
                    Biz bilan bog'laning
                </h2>
                <p data-aos="fade-down" data-aos-duration="1500" className="mb-8 text-center text-gray-600 dark:text-gray-400">
                    Savollar yoki takliflaringiz bo'lsa, quyidagi forma orqali biz bilan bog'lanishingiz mumkin.
                </p>

                <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
                    {/* Kontakt ma'lumotlari */}
                    <div data-aos="fade-up" data-aos-duration="2000" className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="mb-4 font-bold text-2xl text-gray-800 dark:text-white">
                            Kontakt ma'lumotlari
                        </h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                            Bizga istalgan vaqtda qo'ng'iroq qiling yoki telegram orqali yozing.
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-bold text-gray-800 dark:text-white">Telefon:</span>{" "}
                                <a
                                    href="tel:+998916919191"
                                    className="text-brand hover:underline"
                                >
                                    +998 91 691 91 91
                                </a>
                            </li>
                            <li>
                                <span className="font-bold text-gray-800 dark:text-white">Telegram:</span>{" "}
                                <a
                                    href="https://t.me/qadriyatmediaadmin"
                                    className="text-brand hover:underline"
                                >
                                    @qadriyatmediaadmin
                                </a>
                            </li>
                            <li>
                                <span className="font-bold text-gray-800 dark:text-white">Manzil:</span>{" "}
                                Yangi chorsu Kokand, Fergana
                            </li>
                        </ul>
                    </div>

                    {/* Kontakt formasi */}
                    <div data-aos="fade-down" data-aos-duration="2500" className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="mb-4 font-bold text-2xl text-gray-800 dark:text-white">
                            Xabar yuborish
                        </h3>
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 font-medium text-gray-800 text-sm dark:text-gray-200"
                                >
                                    Ismingiz
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 border rounded-lg focus:ring-2 focus:ring-brand w-full text-gray-800 dark:text-gray-200 focus:outline-none"
                                    placeholder="Ismingizni kiriting"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 font-medium text-gray-800 text-sm dark:text-gray-200"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 border rounded-lg focus:ring-2 focus:ring-brand w-full text-gray-800 dark:text-gray-200 focus:outline-none"
                                    placeholder="Emailni kiriting"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 font-medium text-gray-800 text-sm dark:text-gray-200"
                                >
                                    Telefon
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 border rounded-lg focus:ring-2 focus:ring-brand w-full text-gray-800 dark:text-gray-200 focus:outline-none"
                                    placeholder="Telefon raqamni kiriting"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 font-medium text-gray-800 text-sm dark:text-gray-200"
                                >
                                    Xabaringiz
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 p-3 border rounded-lg focus:ring-2 focus:ring-brand w-full text-gray-800 dark:text-gray-200 focus:outline-none"
                                    placeholder="Xabaringizni yozing"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-brand hover:bg-brand-dark px-6 py-3 rounded-lg w-full font-medium text-white transition-all"
                            >
                                Yuborish
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

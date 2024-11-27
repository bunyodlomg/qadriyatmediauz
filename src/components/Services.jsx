const Services = () => {
    return (
        <section id="services" className="bg-gray-50 dark:bg-[#101010] py-16">
            <div className="mx-auto px-6 lg:px-16 container">
                <h2 className="mb-10 font-bold text-3xl text-center text-gray-800 dark:text-gray-100" data-aos="fade-up" data-aos-duration="1000">
                    Bizning Xizmatlarimiz
                </h2>
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Service 1 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center" data-aos="fade-up" data-aos-duration="1600">
                        <div className="mb-4 text-5xl text-brand" data-aos="fade-in" data-aos-duration="1000">
                            <i className="fa-bullhorn fas"></i>
                        </div>
                        <h3 data-aos="fade-up" data-aos-duration="1200" className="mb-3 font-semibold text-gray-700 text-xl dark:text-gray-200">
                            LED Ekran Reklama
                        </h3>
                        <p data-aos="fade-up" data-aos-duration="1400" className="mb-4 text-gray-600 dark:text-gray-400">
                            Shaharning 60 ta markaziy joylarida reklamalaringizni namoyish etamiz.
                        </p>
                        <a data-aos="fade-up" data-aos-duration="1600" href="#contact" className="font-medium text-brand hover:underline">
                            Batafsil ma’lumot
                        </a>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center" data-aos="fade-up" data-aos-duration="1600">
                        <div className="mb-4 text-5xl text-brand" data-aos="fade-in" data-aos-duration="1000">
                            <i className="fa-chart-line fas"></i>
                        </div>
                        <h3 data-aos="fade-up" data-aos-duration="1200" className="mb-3 font-semibold text-gray-700 text-xl dark:text-gray-200">
                            Marketing Strategiyasi
                        </h3>
                        <p data-aos="fade-up" data-aos-duration="1400" className="mb-4 text-gray-600 dark:text-gray-400">
                            Biznesingiz uchun samarali reklama strategiyalarini ishlab chiqamiz.
                        </p>
                        <a data-aos="fade-up" data-aos-duration="1600" href="#contact" className="font-medium text-brand hover:underline">
                            Batafsil ma’lumot
                        </a>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg text-center" data-aos="fade-up" data-aos-duration="1600">
                        <div className="mb-4 text-5xl text-brand" data-aos="fade-in" data-aos-duration="1000">
                            <i className="fa-tv fas"></i>
                        </div>
                        <h3 data-aos="fade-up" data-aos-duration="1200" className="mb-3 font-semibold text-gray-700 text-xl dark:text-gray-200">
                            Media Yechimlar
                        </h3>
                        <p data-aos="fade-up" data-aos-duration="1400" className="mb-4 text-gray-600 dark:text-gray-400">
                            Mahsulot va brendingizni kreativ yondashuvlar bilan ilgari suramiz.
                        </p>
                        <a data-aos="fade-up" data-aos-duration="1600" href="#contact" className="font-medium text-brand hover:underline">
                            Batafsil ma’lumot
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

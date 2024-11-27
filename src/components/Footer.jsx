import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 pt-32">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto container">
                {/* Logo va ma'lumot */}
                <div>
                    <h2 className="mb-4 font-bold text-2xl">Qadriyat Media</h2>
                    <p className="text-gray-400">
                        Qadriyat Media - Sizning raqamli dunyodagi ishonchli sherikingiz. Biz
                        sizga yuqori sifatli xizmatlarni taqdim etamiz.
                    </p>
                </div>

                {/* Foydali havolalar */}
                <div>
                    <h3 className="mb-4 font-semibold text-xl">Foydali havolalar</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-green-400 transition-colors"
                            >
                                Biz haqimizda
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-green-400 transition-colors"
                            >
                                Xizmatlar
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="hover:text-green-400 transition-colors">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-green-400 transition-colors">
                                Biz bilan bog‘lanish
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Ijtimoiy tarmoqlar */}
                <div>
                    <h3 className="mb-4 font-semibold text-xl">Ijtimoiy tarmoqlar</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/Qadriyatmedia/"
                                className="hover:text-green-400 transition-colors"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/qadriyat.media/"
                                className="hover:text-green-400 transition-colors"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://t.me/Qadriyatmedia"
                                className="hover:text-green-400 transition-colors"
                            >
                                Telegram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-gray-700 mt-8 py-4 border-t text-center text-gray-400">
                &copy; {new Date().getFullYear()} Qadriyat Media.
            </div>
        </footer>
    );
};

export default Footer;

import { FaChevronCircleUp } from "react-icons/fa";
import ScrollTop from "./ScroolTop";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 pt-32">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto container">
                {/* Logo va ma'lumot */}
                <div>
                    <a href="#home" rel="noopener noreferrer" className="flex items-center gap-5 -translate-x-2">
                        <img src="/logo.png" alt="Logo" className="w-12" />
                        <h2 className="font-bold text-2xl text-brand">Qadriyat Media</h2>
                    </a>
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
                                href="#services"
                                className="hover:text-green-400 transition-colors"
                            >
                                Xizmatlar
                            </a>
                        </li>
                        <li>
                            <a href="#our-customers" className="hover:text-green-400 transition-colors">
                                Mijozlar
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-green-400 transition-colors">
                                Biz bilan bog‘lanish
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://naqdvision.uz/"
                                target="_blank"
                                className="hover:text-green-400 transition-colors"
                            >
                                Portfolio
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
                                href="https://www.instagram.com/qadriyat_media/"
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
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.youtube.com/@qadriyatmedia"
                                className="hover:text-green-400 transition-colors"
                            >
                                Youtube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-gray-mt-8 py-4 border-t text-center text-gray-400">
                &copy; {new Date().getFullYear()} Qadriyat Media.
            </div>

            <ScrollTop />

        </footer>
    );
};

export default Footer;

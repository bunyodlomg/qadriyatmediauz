import { FaFacebook, FaBars, FaTimes, FaPhone, FaTelegram, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../theme/themeSlice";
import { IoMoon, IoSunny } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div style={{ zIndex: "50" }} className="flex justify-center">
            <nav
                style={{ zIndex: 50 }}
                className={`bg-transparent backdrop-blur-3xl text-current shadow-2xl mt-2 ${isMenuOpen ? 'rounded-t-full' : 'rounded-full'} fixed w-[90%] top-0 `}
            >
                <div className="flex justify-between items-center p-4 container">
                    <ul className="md:flex items-center gap-5 hidden">
                        <li>
                            <a href="#home" className="hover:text-brand active:text-green-900">
                                Asosiy
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-brand active:text-green-900">
                                Xizmatlar
                            </a>
                        </li>
                        <li>
                            <a href="#our-customers" className="hover:text-brand active:text-green-900">
                                Mijozlar
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-brand active:text-green-900">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                    <a href="#home">
                        <img className="mx-auto w-16" src="/logo.png" alt="Logo" />
                    </a>
                    <div className="flex items-center gap-5">
                        <div className="md:flex items-center gap-5 hidden">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/qadriyat_media/"
                            >
                                <PiInstagramLogoFill className="hover:text-pink-500 size-6" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/Qadriyatmedia/"
                            >
                                <FaFacebook className="hover:text-blue-800 size-5" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://t.me/Qadriyatmedia"
                            >
                                <FaTelegram className="hover:text-blue-400 size-5" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.youtube.com/@qadriyatmedia"
                            >
                                <FaYoutube className="hover:text-red-500 size-6" />
                            </a>
                            <a href="tel:+998916919191">
                                <FaPhone className="hover:text-brand size-4 rotate-90" />
                            </a>
                        </div>
                        <label className="ml-5 swap-rotate transition-transform duration-200 swap active:rotate-45">
                            <input type="checkbox" className="theme-controller" value="synthwave" onClick={() => dispatch(toggleTheme())} />
                            {theme && theme === 'dark' ? <IoSunny className="size-5 hover:text-yellow-500" /> : <IoMoon className="size-5 hover:text-blue-800" />}
                        </label>
                        <button
                            onClick={toggleMenu}
                            className="md:hidden focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <FaTimes size={24} className="text-gray-800 dark:text-white" />
                            ) : (
                                <FaBars size={24} className="text-gray-800 dark:text-white" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobil menyu */}
                {isMenuOpen && (
                    <ul
                        style={{ zIndex: 49 }}
                        className="top-15 left-0 absolute flex flex-col items-center gap-4 md:hidden bg-gray-100 dark:bg-gray-900 pt-20 rounded-b-lg w-full h-[85vh] text-2xl"
                    >
                        <li>
                            <a
                                href="#home"
                                className="hover:text-brand active:text-green-900"
                                onClick={toggleMenu}
                            >
                                Asosiy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-brand active:text-green-900"
                                onClick={toggleMenu}>
                                Xizmatlar
                            </a>
                        </li>
                        <li>
                            <a
                                href="#our-customers"
                                className="hover:text-brand active:text-green-900"
                                onClick={toggleMenu}>
                                Mijozlar
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-brand active:text-green-900"
                                onClick={toggleMenu}
                            >
                                Kontakt
                            </a>
                        </li>
                        <div className="flex items-center gap-5">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/qadriyat_media/"
                            >
                                <PiInstagramLogoFill className="hover:text-pink-500 size-6" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/Qadriyatmedia/"
                            >
                                <FaFacebook className="hover:text-blue-800 size-5" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://t.me/Qadriyatmedia"
                            >
                                <FaTelegram className="hover:text-blue-400 size-5" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.youtube.com/@qadriyatmedia"
                            >
                                <FaYoutube className="hover:text-red-500 size-6" />
                            </a>
                            <a href="tel:+998916919191">
                                <FaPhone className="hover:text-brand size-4 rotate-90" />
                            </a>
                        </div>
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Navbar;

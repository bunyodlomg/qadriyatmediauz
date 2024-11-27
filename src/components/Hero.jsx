const Hero = () => {
  return (
    <div
      id="home"
      className="bg-hero-pattern sm:bg-hero-pattern bg-cover bg-top py-20 pt-24 w-full h-lvh text-center">
      <section className="mx-auto container">
        <div className="flex justify-between items-center">
          {/* Left section with different animation effects */}
          <div className="max-w-lg text-left" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="mb-4 font-bold text-4xl" data-aos="zoom-in" data-aos-duration="1200">
              Qadriyat Media – O'zbekistondagi yetakchi reklama agentligi
            </h1>
            <p className="mb-6 text-xl" data-aos="fade-in" data-aos-duration="1400">
              Biz brendlaringizni strategik joylarda namoyish qilish orqali e'tiborni jalb qilamiz.
            </p>
            <a
              href="#services"
              className="bg-brand hover:bg-brand-dark px-6 py-2 rounded-full text-white transition duration-300"
              data-aos="fade-up" data-aos-duration="1600">
              Bizning Xizmatlarimiz
            </a>
          </div>

          {/* Right section with different animation effects */}
          <div className="sm:flex hidden" data-aos="fade-down" data-aos-duration="1000">
            <img
              src="/billboard.png"
              alt="Hero image"
              className="w-full max-w-7xl h-auto"
              data-aos="flip-left" data-aos-duration="1300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

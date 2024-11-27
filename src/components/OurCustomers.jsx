import Marquee from "react-fast-marquee";

const OurCustomers = () => {
    return (
        <div className="m-8 sm:m-24" id="our-customers">
            <h2 className="mb-20 font-bold text-4xl text-center text-gray-800 dark:text-white">
                Bizning mijozlar
            </h2>
            <Marquee style={{}} className="-z-0 container">
                <div className="flex items-center gap-8 sm:gap-20">
                    <img width={70} src="/our-customers/ans.webp" alt="our customers" />
                    <img width={70} src="/our-customers/dom.webp" alt="our customers" />
                    <img width={70} src="/our-customers/dream.webp" alt="our customers" />
                    <img width={70} src="/our-customers/ing.webp" alt="our customers" />
                    <img width={70} src="/our-customers/lrg.webp" alt="our customers" />
                    <img width={70} src="/our-customers/slk.webp" alt="our customers" />
                    <img width={70} src="/our-customers/ty.webp" alt="our customers" />
                    <img width={70} src="/our-customers/uybop.jpg" alt="our customers" />
                </div>
            </Marquee>
        </div>
    )
}

export default OurCustomers
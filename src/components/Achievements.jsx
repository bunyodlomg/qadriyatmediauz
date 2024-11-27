import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievements = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.8, // Trigger when 20% of the component is visible
        triggerOnce: true, // Trigger only once
    });

    React.useEffect(() => {
        if (inView) setStartAnimation(true);
    }, [inView]);

    return (
        <section ref={ref} className="bg-gray-100 dark:bg-gray-900 py-16">
            <div className="mx-auto px-6 lg:px-16 text-center container">
                <h2 className="mb-8 font-bold text-4xl text-gray-800 dark:text-white">
                    Bizning yutuqlarimiz
                </h2>
                <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                    {/* Statistika kartalari */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="mb-4 font-bold text-6xl text-brand">
                            {startAnimation && (
                                <CountUp
                                    start={0}
                                    end={1000}
                                    duration={3} // Animatsiya davomiyligi (soniya)
                                    suffix="+" // Oxiriga "+" qo'shish
                                />
                            )}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Muvaffaqiyatli loyihalar</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="mb-4 font-bold text-6xl text-brand">
                            {startAnimation && (
                                <CountUp
                                    start={0}
                                    end={5}
                                    duration={3}
                                    suffix="+"
                                />
                            )}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Yillik tajriba</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="mb-4 font-bold text-6xl text-brand">
                            {startAnimation && (
                                <CountUp
                                    start={0}
                                    end={60}
                                    duration={3}
                                    suffix="+"
                                />
                            )}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Mediafasadlar</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

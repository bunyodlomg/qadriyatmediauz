import React from 'react'

const OurTeam = () => {
    return (
        <section id="team" className="bg-white dark:bg-gray-900 py-16">
            <div className="mx-auto px-6 lg:px-16 container">
                <h2 className="mb-10 font-bold text-3xl text-center text-gray-800 dark:text-gray-100">
                    Bizning Jamoamiz
                </h2>
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="/team/member1.jpg" alt="Xodim 1" className="w-full h-56 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-gray-700 text-lg dark:text-gray-200">Ali Valiyev</h3>
                            <p className="text-gray-600 text-sm dark:text-gray-400">Marketing Mutaxassisi</p>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Bizning marketing bo'yicha yetakchi mutaxassisimiz.
                            </p>
                            <button className="bg-brand hover:bg-green-700 mt-4 px-4 py-2 rounded-full text-white">
                                Batafsil
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="/team/member2.jpg" alt="Xodim 2" className="w-full h-56 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-gray-700 text-lg dark:text-gray-200">Zarina Usmonova</h3>
                            <p className="text-gray-600 text-sm dark:text-gray-400">Reklama Menejeri</p>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Innovatsion yechimlar yaratishda ixtisoslashgan.
                            </p>
                            <button className="bg-brand hover:bg-green-700 mt-4 px-4 py-2 rounded-full text-white">
                                Batafsil
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="/team/member3.jpg" alt="Xodim 3" className="w-full h-56 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-gray-700 text-lg dark:text-gray-200">Bekzod Karimov</h3>
                            <p className="text-gray-600 text-sm dark:text-gray-400">Texnologiya Mutaxassisi</p>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Texnologik jarayonlarni boshqarish bo'yicha ekspert.
                            </p>
                            <button className="bg-brand hover:bg-green-700 mt-4 px-4 py-2 rounded-full text-white">
                                Batafsil
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src="/team/member4.jpg" alt="Xodim 4" className="w-full h-56 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-gray-700 text-lg dark:text-gray-200">Dilnoza Rahimova</h3>
                            <p className="text-gray-600 text-sm dark:text-gray-400">Kreativ Dizayner</p>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Dizayn va kreativ konseptlarni ishlab chiqishda yetakchi.
                            </p>
                            <button className="bg-brand hover:bg-green-700 mt-4 px-4 py-2 rounded-full text-white">
                                Batafsil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OurTeam
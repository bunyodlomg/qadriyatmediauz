import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import Services from '../components/services'
import Achievements from '../components/Achievements'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import OurCustomers from '../components/OurCustomers'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Achievements />
            <OurCustomers />
            <FAQ />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
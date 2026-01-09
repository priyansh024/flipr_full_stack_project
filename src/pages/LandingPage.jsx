import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="font-sans antialiased text-gray-900">
            <Navbar />
            <Hero />
            <WhyChooseUs />
            <AboutUs />
            <Projects />
            <Clients />
            <Contact />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default LandingPage;

import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-white pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                            Consultation, <br />
                            <span className="gradient-text">Design,</span> <br />
                            & Marketing
                        </h1>
                        <p className="text-gray-600 text-lg mb-8 max-w-md">
                            We help you build your dream project with our expert consultation and design services.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                            Get a Quote
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Consultation"
                            className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce hidden md:block">
                            <p className="font-bold text-gray-800">Get a Free Consultation</p>
                            <p className="text-sm text-gray-500">Contact us today to start your journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

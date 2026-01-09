import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&h=400" alt="Office" className="rounded-2xl shadow-lg mt-8" />
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&h=400" alt="Team" className="rounded-2xl shadow-lg" />
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400" alt="Meeting" className="rounded-2xl shadow-lg" />
                    </div>

                    <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                        <div className="w-20 h-1 bg-blue-600 rounded mb-6 mx-auto md:mx-0"></div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We are a team of passionate individuals dedicated to delivering the best solutions for our clients.
                            With years of experience in the industry, we understand the nuances of design, development, and marketing.
                            Our goal is to help you achieve success through innovation and creativity.
                        </p>
                        <button className="bg-white text-blue-600 border border-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

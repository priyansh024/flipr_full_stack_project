import React from 'react';
import { ShieldCheck, Palette, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 group">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                            <ShieldCheck className="text-blue-600 w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Potential ROI</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We focus on getting you the best results. Our strategies are designed to maximize your return on investment.
                        </p>
                    </div>

                    <div className="text-center p-6 group">
                        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                            <Palette className="text-orange-600 w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Design</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our designs are modern, sleek, and user-friendly. We create experiences that users love.
                        </p>
                    </div>

                    <div className="text-center p-6 group">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                            <TrendingUp className="text-green-600 w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Marketing</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our marketing strategies are data-driven and targeted. We help you reach your audience effectively.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

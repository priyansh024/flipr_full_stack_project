import React, { useState } from 'react';
import { submitContact } from '../services/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        city: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitContact(formData);
            setStatus('success');
            setFormData({ fullName: '', email: '', mobileNumber: '', city: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-blue-50">
            <div className="container mx-auto px-4 flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Contact Us</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get a Free Consultation</h3>
                    <p className="text-gray-600 text-lg mb-8">
                        Have a project in mind? Let's discuss how we can help you achieve your goals.
                        Fill out the form and our team will get back to you shortly.
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Call Us Integration</p>
                            <p className="text-gray-500">+1 234 567 890</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl text-white">
                        <h4 className="text-2xl font-bold mb-6 text-center">Request a Quote</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    placeholder="Mobile Number"
                                    required
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg disabled:opacity-50"
                            >
                                {status === 'submitting' ? 'Submitting...' : 'Get Quick Quote'}
                            </button>
                            {status === 'success' && <p className="text-green-400 text-center mt-2">Submitted successfully!</p>}
                            {status === 'error' && <p className="text-red-400 text-center mt-2">Submission failed.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

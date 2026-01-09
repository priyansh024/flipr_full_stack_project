import React, { useState } from 'react';
import { subscribeNewsletter } from '../services/api';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await subscribeNewsletter(email);
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className="bg-blue-600 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 text-white text-center md:text-left">
                    <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
                    <p className="text-blue-200">Get the latest updates and offers.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-6 py-3 rounded-lg focus:outline-none w-full sm:w-80 text-gray-800"
                    />
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50"
                    >
                        {status === 'submitting' ? '...' : 'Subscribe'}
                    </button>
                </form>
                {status === 'success' && <p className="text-white ml-4 absolute bottom-2 left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">Subscribed!</p>}
            </div>
        </section>
    );
};

export default Newsletter;

import React, { useEffect, useState } from 'react';
import { getClients } from '../services/api';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await getClients();
                setClients(response.data);
            } catch (error) {
                console.error("Failed to fetch clients", error);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    const API_BASE_URL = 'http://localhost:8081';

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Testimonials</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Happy Clients</h3>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clients.map((client) => (
                            <div key={client.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                                <div className="w-20 h-20 mb-4 overflow-hidden rounded-full border-2 border-blue-100 p-1">
                                    <img
                                        src={client.imageUrl ? `${API_BASE_URL}${client.imageUrl}` : "https://via.placeholder.com/100"}
                                        alt={client.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <p className="text-gray-500 text-sm italic mb-6">"{client.description}"</p>
                                <h4 className="font-bold text-blue-600">{client.name}</h4>
                                <span className="text-xs text-gray-400 uppercase tracking-wide">{client.designation}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Clients;

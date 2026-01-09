import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const API_BASE_URL = 'http://localhost:8081'; // Helper for images

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Our Work</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Projects</h3>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        We know that buyers are looking for aesthetics and quality. Here represent some of our best work.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.imageUrl ? `${API_BASE_URL}${project.imageUrl}` : "https://via.placeholder.com/400"}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-bold">View Details</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-xl mb-2 text-blue-600">{project.name}</h4>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors uppercase text-sm">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

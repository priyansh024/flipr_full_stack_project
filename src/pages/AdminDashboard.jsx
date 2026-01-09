import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addProject, addClient, getContacts, getSubscribers } from '../services/api';
import { LayoutDashboard, Users, FileText, Mail, Plus, Image } from 'lucide-react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('projects');

    // State definitions here for clarity
    const [projectForm, setProjectForm] = useState({ name: '', description: '', image: null });
    const [clientForm, setClientForm] = useState({ name: '', designation: '', description: '', image: null });
    const [contacts, setContacts] = useState([]);
    const [subscribers, setSubscribers] = useState([]);

    // Fetch data when tabs change
    useEffect(() => {
        if (activeTab === 'contacts') loadContacts();
        if (activeTab === 'subscribers') loadSubscribers();
    }, [activeTab]);

    const loadContacts = async () => {
        try {
            const res = await getContacts();
            setContacts(res.data);
        } catch (err) { console.error(err); }
    };

    const loadSubscribers = async () => {
        try {
            const res = await getSubscribers();
            setSubscribers(res.data);
        } catch (err) { console.error(err); }
    };

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', projectForm.name);
        formData.append('description', projectForm.description);
        formData.append('image', projectForm.image);
        try {
            await addProject(formData);
            alert('Project Added!');
            setProjectForm({ name: '', description: '', image: null });
        } catch (err) { alert('Failed to add project'); }
    };

    const handleClientSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', clientForm.name);
        formData.append('designation', clientForm.designation);
        formData.append('description', clientForm.description);
        formData.append('image', clientForm.image);
        try {
            await addClient(formData);
            alert('Client Added!');
            setClientForm({ name: '', designation: '', description: '', image: null });
        } catch (err) { alert('Failed to add client'); }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white min-h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
                <nav className="mt-6">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`w-full text-left px-6 py-3 flex items-center ${activeTab === 'projects' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
                    >
                        <LayoutDashboard size={18} className="mr-3" /> Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('clients')}
                        className={`w-full text-left px-6 py-3 flex items-center ${activeTab === 'clients' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
                    >
                        <Users size={18} className="mr-3" /> Clients
                    </button>
                    <button
                        onClick={() => setActiveTab('contacts')}
                        className={`w-full text-left px-6 py-3 flex items-center ${activeTab === 'contacts' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
                    >
                        <FileText size={18} className="mr-3" /> Contact Forms
                    </button>
                    <button
                        onClick={() => setActiveTab('subscribers')}
                        className={`w-full text-left px-6 py-3 flex items-center ${activeTab === 'subscribers' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
                    >
                        <Mail size={18} className="mr-3" /> Subscribers
                    </button>
                </nav>
                <div className="absolute bottom-0 p-6 w-64">
                    <Link to="/" className="text-gray-400 hover:text-white flex items-center">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto p-10">
                {activeTab === 'projects' && (
                    <div className="max-w-2xl bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold mb-6 flex items-center"><Plus className="mr-2" /> Add New Project</h2>
                        <form onSubmit={handleProjectSubmit} className="space-y-4">
                            <input type="text" placeholder="Project Name" className="w-full border p-3 rounded" value={projectForm.name} onChange={e => setProjectForm({ ...projectForm, name: e.target.value })} required />
                            <textarea placeholder="Description" className="w-full border p-3 rounded h-32" value={projectForm.description} onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} required></textarea>
                            <div className="border border-dashed border-gray-300 p-6 rounded text-center">
                                <label className="cursor-pointer block">
                                    <div className="flex flex-col items-center">
                                        <Image size={40} className="text-gray-400 mb-2" />
                                        <span className="text-blue-500">Upload Project Image</span>
                                    </div>
                                    <input type="file" className="hidden" onChange={e => setProjectForm({ ...projectForm, image: e.target.files[0] })} required accept="image/*" />
                                </label>
                                {projectForm.image && <p className="mt-2 text-sm text-gray-600">{projectForm.image.name}</p>}
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-bold">Add Project</button>
                        </form>
                    </div>
                )}

                {activeTab === 'clients' && (
                    <div className="max-w-2xl bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold mb-6 flex items-center"><Plus className="mr-2" /> Add New Client</h2>
                        <form onSubmit={handleClientSubmit} className="space-y-4">
                            <input type="text" placeholder="Client Name" className="w-full border p-3 rounded" value={clientForm.name} onChange={e => setClientForm({ ...clientForm, name: e.target.value })} required />
                            <input type="text" placeholder="Designation (e.g. CEO)" className="w-full border p-3 rounded" value={clientForm.designation} onChange={e => setClientForm({ ...clientForm, designation: e.target.value })} required />
                            <textarea placeholder="Description / Testimonial" className="w-full border p-3 rounded h-32" value={clientForm.description} onChange={e => setClientForm({ ...clientForm, description: e.target.value })} required></textarea>
                            <div className="border border-dashed border-gray-300 p-6 rounded text-center">
                                <label className="cursor-pointer block">
                                    <div className="flex flex-col items-center">
                                        <Image size={40} className="text-gray-400 mb-2" />
                                        <span className="text-blue-500">Upload Client Image</span>
                                    </div>
                                    <input type="file" className="hidden" onChange={e => setClientForm({ ...clientForm, image: e.target.files[0] })} required accept="image/*" />
                                </label>
                                {clientForm.image && <p className="mt-2 text-sm text-gray-600">{clientForm.image.name}</p>}
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-bold">Add Client</button>
                        </form>
                    </div>
                )}

                {activeTab === 'contacts' && (
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold">Contact Form Submissions</h2>
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Email</th>
                                    <th className="p-4">Mobile</th>
                                    <th className="p-4">City</th>
                                    <th className="p-4">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(c => (
                                    <tr key={c.id} className="border-t hover:bg-gray-50">
                                        <td className="p-4 font-medium">{c.fullName}</td>
                                        <td className="p-4">{c.email}</td>
                                        <td className="p-4">{c.mobileNumber}</td>
                                        <td className="p-4">{c.city}</td>
                                        <td className="p-4 text-sm text-gray-500">{new Date(c.submissionDate).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'subscribers' && (
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold">Newsletter Subscribers</h2>
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-4">ID</th>
                                    <th className="p-4">Email Address</th>
                                    <th className="p-4">Subscribed Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.map(s => (
                                    <tr key={s.id} className="border-t hover:bg-gray-50">
                                        <td className="p-4 text-gray-500">#{s.id}</td>
                                        <td className="p-4 font-medium">{s.email}</td>
                                        <td className="p-4 text-sm text-gray-500">{new Date(s.subscriptionDate).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;

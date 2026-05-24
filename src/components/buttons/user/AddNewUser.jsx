"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoPlus } from 'react-icons/go';
import { PostUser } from '@/actions/server/User';

const AddNewUser = ({ onSuccess }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const openModal = () => {
        reset({
            name: "",
            email: "",
            phone: "",
            password: "",
        });
        setMessage({ type: '', text: '' });
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleAddUser = async (data) => {
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const result = await PostUser({
                email: data.email,
                password: data.password,
                name: data.name,
                number: data.phone,
            });

            if (result.success) {
                setMessage({ type: 'success', text: 'User created successfully!' });
                reset();
                setTimeout(() => {
                    closeModal();
                    setMessage({ type: '', text: '' });
                    if (onSuccess) onSuccess();
                }, 1500);
            } else {
                setMessage({ type: 'error', text: result.message || 'Failed to create user' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'An error occurred while creating the user' });
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">
            {/* Top Bar Trigger */}
            <div className="flex flex-col md:flex-row items-center justify-between">
                <button
                    onClick={openModal}
                    className="btn btn-primary text-white rounded-xl mt-10 md:mt-0 flex items-center gap-2"
                >
                    <GoPlus size={24} /> Add New User
                </button>
            </div>

            {/* Modal Setup using your preferred layout style */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
                    
                    {/* Background overlay click-to-close handler */}
                    <div 
                        className="absolute inset-0" 
                        onClick={closeModal}
                    />

                    {/* Card container matching the reference style */}
                    <div className="card bg-white w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5 relative z-10 rounded-xl overflow-hidden">
                        
                        {/* Upper Color banner styling */}
                        <div className="bg-primary text-white p-5 -mx-5 -mt-5 mb-4 text-center">
                            <h3 className="font-semibold text-2xl">
                                Add New User
                            </h3>
                            <p className="text-sm pt-1 opacity-90">
                                Create a new credentials record securely.
                            </p>
                        </div>

                        {/* Top-Right Close Cross Icon */}
                        <button
                            className="btn btn-sm btn-circle absolute right-3 top-3 bg-white/20 text-white border-none hover:bg-white/40"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        <form onSubmit={handleSubmit(handleAddUser)} className="card-body p-0">
                            <fieldset className="fieldset space-y-3" disabled={isLoading}>
                                
                                {/* Success/Error Message */}
                                {message.text && (
                                    <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'} text-sm`}>
                                        {message.type === 'success' ? '✓' : '✕'} {message.text}
                                    </div>
                                )}
                                
                                {/* Full Name Field */}
                                <div>
                                    <label className="label text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Ravin Nayak"
                                        {...register("name", { required: "Name is required" })}
                                        className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs font-medium mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="label text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="ravinnayak@gmail.com"
                                        {...register("email", { required: "Email is required" })}
                                        className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs font-medium mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label className="label text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 81234 56789"
                                        {...register("phone", { required: "Phone number is required" })}
                                        className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs font-medium mt-1">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="label text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        {...register("password", { 
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be 6+ characters long" }
                                        })}
                                        className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs font-medium mt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Save Button with bg-primary style */}
                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="btn bg-primary text-white hover:bg-opacity-90 w-full mt-4 border-none disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Adding User...' : 'Add User'}
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddNewUser;
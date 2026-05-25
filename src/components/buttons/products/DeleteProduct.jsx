"use client";
import React, { useState } from 'react';
import { DeleteProduct as deleteProductAction } from '@/actions/server/Product';

const DeleteProduct = ({ productId, onDeleteSuccess }) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleDeleteClick = () => {
        setIsConfirmOpen(true);
        setMessage({ type: '', text: '' });
    };

    const handleConfirmDelete = async () => {
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const result = await deleteProductAction({ productId });

            if (result.success) {
                setMessage({ type: 'success', text: 'Product deleted successfully!' });
                setTimeout(() => {
                    setIsConfirmOpen(false);
                    setMessage({ type: '', text: '' });
                    if (onDeleteSuccess) onDeleteSuccess();
                }, 1500);
            } else {
                setMessage({ type: 'error', text: result.message || 'Failed to delete product' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'An error occurred while deleting the product' });
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        if (isLoading) return;
        setIsConfirmOpen(false);
        setMessage({ type: '', text: '' });
    };

    return (
        <div>
            {/* Main Action Trigger */}
            <button 
                onClick={handleDeleteClick}
                disabled={isLoading}
                className="btn btn-error btn-md"
            >
                Delete
            </button>

            {/* Standard DaisyUI Modal Structural Overlay */}
            {isConfirmOpen && (
                <div className="modal modal-open pointer-events-auto bg-black/40 transition-all duration-200">
                    {/* Backdrop click interceptor to dismiss safety panel */}
                    <div className="fixed inset-0 cursor-pointer" onClick={handleCancel} />
                    
                    {/* Native Modal content card layout */}
                    <div className="modal-box relative max-w-sm bg-white rounded-xl p-6 shadow-xl z-10 border border-gray-100">
                        <h3 className="font-bold text-lg text-gray-800">Delete Product</h3>
                        <p className="py-4 text-sm text-gray-500 leading-relaxed">
                            Are you sure you want to permanently delete this product? This action cannot be reverted.
                        </p>

                        {/* Minimalized Alert Context Nodes */}
                        {message.text && (
                            <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'} text-xs font-medium py-2 px-3 rounded-lg mb-4`}>
                                <span>{message.text}</span>
                            </div>
                        )}

                        {/* Standard DaisyUI Modal Actions layout block */}
                        <div className="modal-action mt-2">
                            <button 
                                onClick={handleCancel}
                                disabled={isLoading}
                                className="btn btn-ghost btn-sm font-medium normal-case"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleConfirmDelete}
                                disabled={isLoading}
                                className={`btn btn-error btn-sm font-medium normal-case text-white ${isLoading ? 'loading' : ''}`}
                            >
                                {isLoading ? 'Deleting...' : 'Confirm Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteProduct;
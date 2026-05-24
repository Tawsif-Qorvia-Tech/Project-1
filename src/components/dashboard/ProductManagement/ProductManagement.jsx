import AddNewProduct from '@/components/buttons/AddNewProduct';
import React from 'react';
import { GoPlus } from 'react-icons/go';

const ProductManagement = ({ products = [] }) => {
    return (
         <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold text-primary mb-2">All Products</h1>
        <p className="text-sm text-gray-600">Manage and track all products</p>
        </div>
        <AddNewProduct />
      </div>
      
      {products.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-500">No products found</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-linear-to-r from-primary to-primary/80 text-white">
                <tr>
                  <th className="text-white font-semibold py-4">SL No.</th>
                  <th className="text-white font-semibold py-4">Service Name</th>
                  <th className="text-white font-semibold py-4">Price</th>
                  <th className="text-white font-semibold py-4">Category</th>
                  <th className="text-white font-semibold py-4">Rating</th>
                  <th className="text-white font-semibold py-4">Created At</th>
                  <th className="text-white font-semibold py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr 
                    key={product._id}
                    className="hover:bg-primary/5 transition-colors duration-150 border-b border-gray-100"
                  >
                    <th className="font-medium text-gray-700">{index + 1}</th>
                    <td className="text-gray-800 font-medium">{product.name}</td>
                    <td className="text-gray-700">৳{product.price}</td>
                    <td className="text-gray-600">{product.category}</td>
                    <td className="text-gray-600">{product.rating.average.toFixed(1)}</td>
                    <td className="text-gray-600">{new Date(product.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-md btn-primary mr-2">Edit</button>
                      <button className="btn btn-md btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    );
};

export default ProductManagement;
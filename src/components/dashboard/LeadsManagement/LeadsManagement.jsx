import { DeleteProduct } from '@/actions/server/Product';
import React from 'react';

const LeadsManagement = ({Leads = []}) => {
    return (
          <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-primary mb-2">All Leads</h1>
                <p className="text-sm text-gray-600">Manage and track all leads</p>
                </div>
              </div>
              
              {Leads.length === 0 ? (
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <p className="text-gray-500">No leads found</p>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <thead className="bg-linear-to-r from-primary to-primary/80 text-white">
                        <tr>
                          <th className="text-white font-semibold py-4">SL No.</th>
                          <th className="text-white font-semibold py-4">Product Name</th>
                          <th className="text-white font-semibold py-4">Name</th>
                          <th className="text-white font-semibold py-4">Email</th>
                          <th className="text-white font-semibold py-4">Number</th>
                          <th className="text-white font-semibold py-4">Query</th>
                          <th className="text-white font-semibold py-4">Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Leads.map((lead, index) => (
                          <tr 
                            key={lead._id}
                            className="hover:bg-primary/5 transition-colors duration-150 border-b border-gray-100"
                          >
                            <th className="font-medium text-gray-700">{index + 1}</th>
                            <td className="text-gray-800 font-medium">{lead.productName}</td>
                            <td className="text-gray-700">{lead.name}</td>
                            <td className="text-gray-600">{lead.email}</td>
                            <td className="text-gray-600">{lead.number}</td>
                            <td className="text-gray-600 max-w-xs">{lead.query}</td>
                            <td className="text-gray-600">{new Date(lead.createdAt).toLocaleDateString()}</td>
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

export default LeadsManagement;

"use client";

import AddNewUser from '@/components/buttons/user/AddNewUser';
import DeleteUser from '@/components/buttons/user/DeleteUser';
import { getUsers } from '@/actions/server/User';
import React, { useState, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';

const UserManagement = ({ users: initialUsers = [] }) => {
    const [users, setUsers] = useState(initialUsers);
    const [isLoading, setIsLoading] = useState(false);

    const refreshUsers = async () => {
        setIsLoading(true);
        try {
            const updatedUsers = await getUsers();
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error refreshing users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-primary mb-2">All Users</h1>
        <p className="text-sm text-gray-600">Manage and track all users</p>
        </div>
        <AddNewUser onSuccess={refreshUsers} />
      </div>
      
      {users.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-500">No users found</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-linear-to-r from-primary to-primary/80 text-white">
                <tr>
                  <th className="text-white font-semibold py-4">SL No.</th>
                  <th className="text-white font-semibold py-4">User Name</th>
                  <th className="text-white font-semibold py-4">Email</th>
                  <th className="text-white font-semibold py-4">Number</th>
                  <th className="text-white font-semibold py-4">Role</th>
                  <th className="text-white font-semibold py-4">Created At</th>
                  <th className="text-white font-semibold py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={user._id}
                    className="hover:bg-primary/5 transition-colors duration-150 border-b border-gray-100"
                  >
                    <th className="font-medium text-gray-700">{index + 1}</th>
                    <td className="text-gray-800 font-medium">{user.name}</td>
                    <td className="text-gray-700">{user.email}</td>
                    <td className="text-gray-700">{user.number || 'N/A'}</td>
                    <td className="text-gray-600">{user.role}</td>
                    <td className="text-gray-600">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="flex items-center">
                      <button className="btn btn-md btn-primary mr-2">Edit</button>
                      <DeleteUser userId={user._id} onDeleteSuccess={refreshUsers} />
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

export default UserManagement;
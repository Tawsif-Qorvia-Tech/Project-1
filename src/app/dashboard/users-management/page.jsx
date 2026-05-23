import { getUsers } from '@/actions/server/User';
import UserManagement from '@/components/dashboard/UserManagement/UserManagement';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
    const Users = await getUsers();
    const session = await getServerSession(authOptions);

    if (session.user.role !== 'admin') {
        redirect('/dashboard');
    }

    return (
        <div>
            <UserManagement users={Users} />
        </div>
    );
};

export default page;
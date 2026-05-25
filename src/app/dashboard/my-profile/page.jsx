import { getUserByEmail } from '@/actions/server/User';
import MyProfile from '@/components/dashboard/my-profile/MyProfile';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const page = async() => {
    const session = await getServerSession(authOptions);
    const user = await getUserByEmail(session?.user?.email);
    return (
        <div className="bg-[#f5e6f5] min-h-screen">
            <MyProfile user={user} />
        </div>
    );
};

export default page;
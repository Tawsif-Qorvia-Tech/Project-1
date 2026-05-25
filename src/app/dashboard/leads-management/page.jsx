import { getLeads } from '@/actions/server/Leads';
import LeadsManagement from '@/components/dashboard/LeadsManagement/LeadsManagement';
import React from 'react';

const page = async () => {
    const Leads = await getLeads();
    return (
        <div className="bg-[#f5e6f5] min-h-screen">
            <LeadsManagement Leads={Leads} />
        </div>
    );
};

export default page;
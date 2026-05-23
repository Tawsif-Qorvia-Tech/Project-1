
import AboutUs from '@/components/ContactUs/AboutUs';
import ContactForm from '@/components/ContactUs/ContactForm';
import ImpactMetrics from '@/components/ContactUs/ImpactMetrics'
import React from 'react';

const page = () => {
    return (
        <>
        
        <div className="w-full px-2 xl:px-6">
            <AboutUs></AboutUs>
        </div>
        
        <div className="w-full">
        <ImpactMetrics></ImpactMetrics>
        </div>

        <div className="w-full">
        <ContactForm></ContactForm>
        </div>

        </>
    );
};

export default page;
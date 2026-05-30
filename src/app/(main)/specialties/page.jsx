import CTA from '@/components/home/CTA';
import SpecialtiesHero from '@/components/Specialities/AboutUs';
import OnboardingSteps from '@/components/ContactUs/OnboardingSteps';
import ImpactMetrics from '@/components/ContactUs/ImpactMetrics'
import React from 'react';
import FAQ from '@/components/shared/FAQ';

const page = () => {
    return (
       <>
        <div className="w-full px-2 xl:px-6">
            <SpecialtiesHero></SpecialtiesHero>
        </div>

        <div>
            <OnboardingSteps></OnboardingSteps>
        </div>

        <div>
            <ImpactMetrics></ImpactMetrics>
        </div>

        <div>
            <FAQ></FAQ>
        </div>

        <div>
        <CTA></CTA>
      </div>
       </>
    );
};

export default page;
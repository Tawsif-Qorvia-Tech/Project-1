import React from 'react';

const CTA = () => {
    return (
        <section className="w-full bg-[#f5e6f5] py-20 px-6 md:px-12 border-t border-base-300 my-20 rounded-2xl">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                {/* Strong headline focusing on health and outcomes */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#232323] leading-tight">
                    Protect Your Herd. Optimize Your Yield.
                </h2>
                
                {/* Short supporting sentence with clear farm benefits */}
                <p className="text-lg md:text-xl text-[#444444] max-w-3xl mx-auto leading-relaxed">
                    Invest in science-backed veterinary medicines engineered to keep your livestock healthier, your animals happier, and your farm operations running at peak productivity.
                </p>
                
                {/* Dual Button Layout - Spaced, wider, and responsive */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                    {/* Primary Action: Direct Sales */}
                    <button className="btn btn-primary btn-lg px-10 shadow-md hover:shadow-lg transition-all normal-case text-white w-full sm:w-auto min-w-55">
                        Shop Vet Solutions
                    </button>
                    
                    {/* Secondary Action: Bulk Orders / Consultation */}
                    <button className="btn btn-outline btn-primary btn-lg px-10 transition-all normal-case w-full sm:w-auto min-w-55">
                        Consult a Farm Expert
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
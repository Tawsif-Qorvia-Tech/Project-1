import { getProductById } from '@/actions/server/Product';
import WishList from '@/components/buttons/WishList';
import Image from 'next/image';
import React from 'react';

import { FaShoppingCart, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

const ProductDetailsPage = async ({ params }) => {
    const resolvedParams = await params;
    const id = resolvedParams.id; 
    
    const product = await getProductById(id);
    
    if (!product) {
        return (
            <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl font-bold text-base-content">Product Not Found</h2>
                <p className="text-base-content/60">The veterinary solution requested could not be retrieved.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-12 flex justify-center items-center">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-base-100">
                
                {/* Left Column: Premium Single Image Showcase Viewport */}
                <div className="col-span-1 lg:col-span-6 w-full">
                    <div className="bg-[#F3F5F7] rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-6 sm:p-12 relative border border-base-200 shadow-sm">
                        
                        {/* Dynamic Wishlist Action Integration */}
                        <div className="absolute top-4 right-4 z-10">
                            <WishList isWishlisted={product.isWishlisted} productId={product._id} />
                        </div>

                        {/* Centered Isolated Core Product Graphic */}
                        <div className="relative w-full h-full max-h-[380px] aspect-square transition-transform duration-300 hover:scale-105">
                            <Image 
                                src={product.image?.url || "https://placehold.co/600x400?text=No+Image"} 
                                alt={product.image?.alt || product.name} 
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                                className="object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Clean Industrial Technical Specs Information */}
                <div className="col-span-1 lg:col-span-6 space-y-6">
                    
                    {/* Header Classification Tag Details */}
                    <div className="space-y-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md inline-block">
                            {product.category || "Veterinary Solution"}
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#232323] tracking-tight">
                            {product.name}
                        </h1>
                        <p className="text-base sm:text-lg text-[#444444] font-medium leading-relaxed">
                            {product.tagline}
                        </p>
                    </div>

                    {/* Commercial Pricing Metrics Framework */}
                    <div className="bg-base-200/50 rounded-xl p-4 sm:p-5 border border-base-200 grid grid-cols-2 gap-4 divide-x divide-base-300">
                        <div className="space-y-1">
                            <p className="text-xs text-base-content/60 uppercase tracking-wider font-semibold">Price Per Unit</p>
                            <p className="text-2xl sm:text-3xl font-black text-[#232323]">
                                ₹{product.price?.toFixed(2)}
                            </p>
                        </div>
                        <div className="space-y-1 pl-4 sm:pl-6">
                            <p className="text-xs text-base-content/60 uppercase tracking-wider font-semibold">Minimum Order Quantity</p>
                            <p className="text-lg sm:text-xl font-bold text-[#232323] pt-0.5">
                                {product.moq?.quantity} {product.moq?.unit || "pcs"}
                            </p>
                        </div>
                    </div>

                    {/* Operational Order Form Execution Controls */}
                    <div className="space-y-4 pt-2">
                        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                            {/* Native Multiplier Input Frame */}
                            <div className="join border border-base-300 w-full sm:w-auto justify-between items-center bg-base-100 rounded-lg">
                                <button className="btn btn-ghost join-item px-4 text-lg font-bold text-[#444444]">-</button>
                                <input 
                                    type="number" 
                                    className="input join-item w-20 text-center font-bold border-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-[#232323]" 
                                    defaultValue={product.moq?.quantity || 1} 
                                    min={product.moq?.quantity || 1}
                                />
                                <button className="btn btn-ghost join-item px-4 text-lg font-bold text-[#444444]">+</button>
                            </div>

                            {/* Main Transaction Processing Trigger Link */}
                            <button className="btn btn-primary flex-1 shadow-md hover:shadow-lg transition-all text-white font-semibold text-base gap-2 rounded-lg h-auto min-h-[48px]">
                                <FaShoppingCart className="text-sm" /> Add to Cart
                            </button>
                        </div>
                        
                        {/* Instant Alternative Enterprise Call-Out Button */}
                        <button className="btn btn-outline w-full rounded-lg text-base-content/80 font-medium normal-case border-base-300 hover:bg-base-200">
                            Get Custom Farm Quote
                        </button>
                    </div>

                    {/* Modular Regulatory Collapsible Information Accents */}
                    <div className="space-y-2 pt-4 border-t border-base-200">
                        <div className="collapse collapse-plus border border-base-200 bg-base-100 rounded-xl">
                            <input type="checkbox" defaultChecked /> 
                            <div className="collapse-title text-sm font-bold uppercase tracking-wider text-[#232323] flex items-center gap-2">
                                <FaCheckCircle className="text-primary text-xs" /> Description & Clinical Efficacy
                            </div>
                            <div className="collapse-content text-sm text-[#444444] leading-relaxed">
                                <p>Engineered via strict medical production guidelines to promote holistic herd management health solutions. This production-grade formula contains verified active clinical ingredients optimized for maximum biosecurity defense profiles under diverse agricultural climate spaces.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus border border-base-200 bg-base-100 rounded-xl">
                            <input type="checkbox" /> 
                            <div className="collapse-title text-sm font-bold uppercase tracking-wider text-[#232323] flex items-center gap-2">
                                <FaShieldAlt className="text-primary text-xs" /> Storage & Farm Safety Logistics
                            </div>
                            <div className="collapse-content text-sm text-[#444444] leading-relaxed">
                                <p>Keep sealed in cool, dry climate storage conditions away from direct solar radiation profiles. Always check target verification schedules prior to full scale farm-wide application setups.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;
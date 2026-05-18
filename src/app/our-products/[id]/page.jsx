import { getProductById } from "@/actions/server/Product";
import WishList from "@/components/buttons/WishList";
import OurProducts from "@/components/home/OurProducts";
import FAQ from "@/components/shared/FAQ";
import Image from "next/image";
import React from "react";

import { 
  FaShoppingCart, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaBoxOpen, 
  FaQuestionCircle, 
  FaTable, 
  FaStar, 
  FaStethoscope, 
  FaFlask 
} from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product = await getProductById(id);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold text-base-content">
          Product Not Found
        </h2>
        <p className="text-base-content/60">
          The veterinary solution requested could not be retrieved.
        </p>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-12">
        {/* Main Product Presentation Card Container */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-base-100">
          {/* Left Column: Premium Single Image Showcase Viewport */}
          <div className="col-span-1 lg:col-span-6 w-full">
            <div className="bg-[#F3F5F7] rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-6 sm:p-12 relative border border-base-200 shadow-sm">
              {/* Dynamic Wishlist Action Integration */}
              <div className="absolute top-4 right-4 z-10">
                <WishList
                  isWishlisted={product.isWishlisted}
                  productId={product._id}
                />
              </div>

              {/* Centered Isolated Core Product Graphic */}
              <div className="relative w-full h-full max-h-[390px] aspect-square transition-transform duration-300 hover:scale-105">
                <Image
                  src={
                    product.image?.url ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
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
                <p className="text-xs text-base-content/60 uppercase tracking-wider font-semibold">
                  Price Per Unit
                </p>
                <p className="text-2xl sm:text-3xl font-black text-[#232323]">
                  ₹{product.price?.toFixed(2)}
                </p>
              </div>
              <div className="space-y-1 pl-4 sm:pl-6">
                <p className="text-xs text-base-content/60 uppercase tracking-wider font-semibold">
                  Minimum Order Quantity
                </p>
                <p className="text-lg sm:text-xl font-bold text-[#232323] pt-0.5">
                  {product.moq?.quantity} {product.moq?.unit || "pcs"}
                </p>
              </div>
            </div>

            {/* Redesigned Packaging Unit Selector */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-base-content/70">
                <FaBoxOpen className="text-primary/80" />
                <span>Available Packaging Units</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <label className="label cursor-pointer p-0">
                  <input 
                    type="radio" 
                    name="pack_size" 
                    className="peer hidden" 
                    defaultChecked 
                  />
                  <div className="px-4 py-2 border-2 border-base-300 rounded-xl font-bold text-sm text-[#444444] bg-base-100 transition-all duration-200 shadow-sm hover:border-base-400 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary">
                    1 Litre
                  </div>
                </label>
                <label className="label cursor-pointer p-0">
                  <input 
                    type="radio" 
                    name="pack_size" 
                    className="peer hidden" 
                  />
                  <div className="px-4 py-2 border-2 border-base-300 rounded-xl font-bold text-sm text-[#444444] bg-base-100 transition-all duration-200 shadow-sm hover:border-base-400 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary">
                    5 Litre
                  </div>
                </label>
              </div>
            </div>

            {/* Operational Order Form Execution Controls */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                {/* Native Multiplier Input Frame */}
                <div className="join border border-base-300 w-full sm:w-auto justify-between items-center bg-base-100 rounded-lg">
                  <button className="btn btn-ghost join-item px-4 text-lg font-bold text-[#444444]">
                    -
                  </button>
                  <input
                    type="number"
                    className="input join-item w-20 text-center font-bold border-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-[#232323]"
                    defaultValue={product.moq?.quantity || 1}
                    min={product.moq?.quantity || 1}
                  />
                  <button className="btn btn-ghost join-item px-4 text-lg font-bold text-[#444444]">
                    +
                  </button>
                </div>

                {/* Main Transaction Processing Trigger Link */}
                <button className="btn btn-primary flex-1 shadow-md hover:shadow-lg transition-all text-white font-semibold text-base gap-2 rounded-lg h-auto min-h-[48px]">
                  <FaShoppingCart className="text-sm" /> Add to Cart
                </button>
              </div>
            </div>

            {/* Modular Regulatory Collapsible Information Accents */}
            <div className="space-y-2 pt-4 border-t border-base-200">
              <div className="collapse collapse-plus border border-base-200 bg-base-100 rounded-xl">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title text-sm font-bold uppercase tracking-wider text-[#232323] flex items-center gap-2">
                  <FaCheckCircle className="text-primary text-xs" /> Description
                  & Clinical Efficacy
                </div>
                <div className="collapse-content text-sm text-[#444444] leading-relaxed">
                  <p>
                    Engineered via strict medical production guidelines to
                    promote holistic herd management health solutions. This
                    production-grade formula contains verified active clinical
                    ingredients optimized for maximum biosecurity defense
                    profiles under diverse agricultural climate spaces.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus border border-base-200 bg-base-100 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title text-sm font-bold uppercase tracking-wider text-[#232323] flex items-center gap-2">
                  <FaShieldAlt className="text-primary text-xs" /> Storage &
                  Farm Safety Logistics
                </div>
                <div className="collapse-content text-sm text-[#444444] leading-relaxed">
                  <p>
                    Keep sealed in cool, dry climate storage conditions away
                    from direct solar radiation profiles. Always check target
                    verification schedules prior to full scale farm-wide
                    application setups.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus border border-base-200 bg-base-100 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title text-sm font-bold uppercase tracking-wider text-[#232323] flex items-center gap-2">
                  <FaShieldAlt className="text-primary text-xs" /> Storage &
                  Farm Safety Logistics
                </div>
                <div className="collapse-content text-sm text-[#444444] leading-relaxed">
                  <p>
                    Keep sealed in cool, dry climate storage conditions away
                    from direct solar radiation profiles. Always check target
                    verification schedules prior to full scale farm-wide
                    application setups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        <div className="max-w-6xl w-full border-t border-base-200 pt-12 space-y-20">
          
          {/* Section 1: Why Supplement Framework */}
          <section className="bg-[#f5e6f5] rounded-2xl p-6 sm:p-8 border border-base-200">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#232323] flex items-center gap-2.5 mb-3 uppercase tracking-tight">
              <FaQuestionCircle className="text-primary" /> Why Supplement ImuLiv?
            </h2>
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              The present agricultural trend where numerous toxic chemicals are used in the production of animal foods 
              and with the present demand of numerous drugs to be incorporated in the animal diet and water supply, 
              the liver faces a great threat of <strong className="text-[#232323]">OVERLOADING</strong> its functions to detoxify the blood. 
              <strong className="text-primary"> IMULIV</strong> is specially formulated to provide substances and nutrients needed by the liver to function properly.
            </p>
          </section>

          {/* Section 2: Nutritional Value Matrix Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#232323] flex items-center gap-2.5 uppercase tracking-tight">
              <FaTable className="text-primary" /> Nutritional Value of 10 ml.
            </h2>
            <div className="overflow-x-auto border border-base-200 rounded-xl shadow-sm">
              <table className="table w-full bg-base-100 text-sm text-[#444444]">
                <thead>
                  <tr className="bg-base-200/60 text-[#232323] border-b border-base-200 text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Nutrient Ingredient</th>
                    <th className="py-3.5 px-4 font-bold text-right">Concentration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-base-200 font-medium">
                  <tr className="hover:bg-base-200/20 transition-colors">
                    <td className="py-3 px-4">Choline Chloride</td>
                    <td className="py-3 px-4 text-right text-[#232323] font-bold">2000 mg.</td>
                  </tr>
                  <tr className="hover:bg-base-200/20 transition-colors">
                    <td className="py-3 px-4">Protein Hydrolysate</td>
                    <td className="py-3 px-4 text-right text-[#232323] font-bold">50 mg.</td>
                  </tr>
                  <tr className="hover:bg-base-200/20 transition-colors">
                    <td className="py-3 px-4">Yeast Extract</td>
                    <td className="py-3 px-4 text-right text-[#232323] font-bold">40 mg.</td>
                  </tr>
                  <tr className="hover:bg-base-200/20 transition-colors">
                    <td className="py-3 px-4">DL-Panthenol</td>
                    <td className="py-3 px-4 text-right text-[#232323] font-bold">2.5 mg.</td>
                  </tr>
                  <tr className="hover:bg-base-200/20 transition-colors">
                    <td className="py-3 px-4">Inositol</td>
                    <td className="py-3 px-4 text-right text-[#232323] font-bold">35 mg.</td>
                  </tr>
                  <tr className="hover:bg-base-200/20 transition-colors">
                    <td className="py-3 px-4">Niacin</td>
                    <td className="py-3 px-4 text-right text-[#232323] font-bold">24 mg.</td>
                  </tr>
                  <tr className="hover:bg-base-200/20 transition-colors">
                    <td className="py-3 px-4 flex flex-col sm:flex-row sm:items-center gap-1">
                      <span>Vitamin B₁₂</span>
                      <span className="text-xs text-base-content/50 font-normal">
                        (equivalent to Vitamin B₁₂ available from 0.55 ml. of liver extract 1:30)
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-[#232323] font-bold whitespace-nowrap">3.3 mcg.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Grid Layout Container for remaining actionable bullet points */}
          <div className="grid grid-cols-1 gap-15">
            
            {/* Section 3: Unique Features Bullet Panel */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#232323] flex items-center gap-2.5 uppercase tracking-tight">
                <FaStar className="text-primary" /> Unique Features
              </h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#444444] font-medium">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Boosts Liver Functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Promotes Growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Excellent performance against hepatic dysfunctions due to toxins, disease & drugs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Increases production & hatchability</span>
                </li>
              </ul>
            </section>

            {/* Section 4: Indications Diagnostics Bullet Panel */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#232323] flex items-center gap-2.5 uppercase tracking-tight">
                <FaStethoscope className="text-primary" /> Indications
              </h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#444444] font-medium">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>For the prevention & treatment of acute & chronic liver disorders, aflatoxicosis, non specific anorexia, weakness, anemia & stress</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>To regulate feed intake & livability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>To improve feed conversion rate (FCR), egg production, weight gain & hatchability</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Section 5: Inclusion Rate Calculation Metrics */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#232323] flex items-center gap-2.5 uppercase tracking-tight">
              <FaFlask className="text-primary" /> Inclusion Rate
            </h2>
            <div className="bg-[#f5e6f5] rounded-xl border border-base-200 divide-y divide-base-200 overflow-hidden shadow-sm max-w-2xl">
              <div className="flex justify-between items-center p-3.5 sm:px-6 text-sm font-semibold">
                <span className="text-base-content/70">Chicks</span>
                <span className="text-[#232323] font-bold">0.5 ml. per liter of drinking water</span>
              </div>
              <div className="flex justify-between items-center p-3.5 sm:px-6 text-sm font-semibold">
                <span className="text-base-content/70">Growers & Broilers</span>
                <span className="text-[#232323] font-bold">0.5 ml. per liter of drinking water</span>
              </div>
              <div className="flex justify-between items-center p-3.5 sm:px-6 text-sm font-semibold">
                <span className="text-base-content/70">Layers & Breeders</span>
                <span className="text-[#232323] font-bold">1.0 ml. per liter of drinking water</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <div>
        <FAQ></FAQ>
      </div>

      <div className="w-11/12 mx-auto mt-16">
        <OurProducts></OurProducts>
      </div>
    </>
  );
};

export default ProductDetailsPage;
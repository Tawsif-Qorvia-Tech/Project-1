import { getProductById, getProductBySlug } from "@/actions/server/Product";
import OurProducts from "@/components/home/OurProducts";
import FAQ from "@/components/shared/FAQ";
import CTA from "@/components/home/CTA";
import immuliv from "@/assets/immuliv.png";
import ProductDetailsClient from "@/components/ProductDetails/ProductDetailsClient";
import Image from "next/image";

import {
  FaShoppingCart,
  FaCheckCircle,
  FaShieldAlt,
  FaBoxOpen,
  FaQuestionCircle,
  FaTable,
  FaStar,
  FaStethoscope,
  FaFlask,
} from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

 const product = await getProductBySlug(id);

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
    <div className="">
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-12">
        {/* Main Product Presentation Card Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center xl:px-12">
          {/* Left Column: Premium Single Image Showcase Viewport */}
          <div className="col-span-1 lg:col-span-6 w-full ">
            <div className="bg-[#F3F5F7] rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative border border-base-200 shadow-sm">
              {/* Dynamic Wishlist Action Integration */}
              <div className="absolute top-4 right-4 z-10">
                {/* <WishList
                  isWishlisted={product.isWishlisted}
                  productId={product._id}
                /> */}
              </div>

              {/* Centered Isolated Core Product Graphic */}
              <div className="relative w-full h-full max-h-[390px] aspect-square transition-transform duration-300 hover:scale-105">
                <Image
                  src={product.image?.url || immuliv}
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
                  {product.moqQuantity} {product.moqUnit || "pcs"}
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
                  <div className="px-4 py-2 border-2 border-base-300 rounded-xl font-bold text-sm text-[#444444] bg-base-100 transition-all duration-200 shadow-sm hover:border-base-400">
                    1 Litre
                  </div>
                </label>
                <label className="label cursor-pointer p-0">
                  <input
                    type="radio"
                    name="pack_size"
                    className="peer hidden"
                  />
                  <div className="px-4 py-2 border-2 border-base-300 rounded-xl font-bold text-sm text-[#444444] bg-base-100 transition-all duration-200 shadow-sm hover:border-base-400 peer-checked:text-primary">
                    5 Litre
                  </div>
                </label>
              </div>
            </div>

            {/* Operational Order Form Execution Controls */}
            <ProductDetailsClient productName={product.name} />

            {/* Modular Regulatory Summary Accent */}
            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 text-xs text-[#444444] leading-relaxed">
              <div className="font-bold uppercase tracking-wider text-[#232323] flex items-center gap-1.5 mb-1.5">
                <FaCheckCircle className="text-primary text-[10px]" />{" "}
                <span className="text-2xl font-bold">
                  {" "}
                  Product Overview & Safety Logistics{" "}
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium leading-relaxed pt-3">
                {product.summary}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        <div className="max-w-3xl w-full pt-12 space-y-15 md:space-y-20">
          {/* Section 1: Why Supplement */}
          <section className="rounded-2xl">
            <h2 className="text-2xl sm:text-[40px] font-bold text-[#232323] uppercase tracking-tight mb-3">
              Why Supplement {product.name}?
            </h2>
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              {product.whySupplement}
            </p>
          </section>
          <section className="space-y-4 w-full mt-10 md:mt-16">
            <h2 className="text-2xl sm:text-[32px] font-bold text-[#232323] flex items-center gap-2.5 uppercase tracking-tight">
              Nutritional Value of {product.nutritionalValueAmount || "10 ml."}
            </h2>

            <div className="overflow-x-auto border border-base-200 rounded-xl shadow-sm">
              <table className="table w-full text-xs sm:text-sm text-[#444444]">
                <thead>
                  <tr className="bg-base-200/60 text-[#232323] border-b border-base-200 text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold">Nutrient Ingredient</th>
                    <th className="py-3 px-4 font-bold text-right">
                      Concentration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-base-200 font-medium">
                  {product.nutritionalValues?.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-base-200/20 transition-colors"
                    >
                      <td className="py-2.5 px-4">{item.ingredient}</td>
                      <td className="py-2.5 px-4 text-right text-[#232323] font-bold">
                        {item.concentration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Grid Layout Container for remaining actionable bullet points */}
          {/* Section 3: Unique Features */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-[40px] font-bold text-[#232323] uppercase tracking-tight">
              Unique Features
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#444444] font-medium">
              {product.uniqueFeatures?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item.feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: Indications */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-[40px] font-bold text-[#232323] uppercase tracking-tight">
              Indications
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#444444] font-medium">
              {product.indications?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item.indication}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Inclusion Rate */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-[40px] font-bold text-[#232323] uppercase tracking-tight">
              Inclusion Rate
            </h2>
            <div className="rounded-xl border border-base-200 divide-y divide-base-200 overflow-hidden shadow-sm max-w-2xl">
              {product.inclusionRates?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3.5 sm:px-6 text-sm font-semibold"
                >
                  <span className="text-base-content/70">{item.livestock}</span>
                  <span className="text-[#232323] font-bold">{item.rate}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <div>
        <FAQ></FAQ>
      </div>

      <div className="w-11/12 mx-auto">
        <OurProducts showWishlist={false}></OurProducts>
      </div>

      <div>
        <CTA></CTA>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

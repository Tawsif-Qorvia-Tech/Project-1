import { getProducts } from "@/actions/server/Product";
import ProductsCard from "@/components/cards/ProductsCard";
import RangeCard from "../cards/RangeCard";


const ProductRange = async () => {
  const allProducts = await getProducts();
  const products = allProducts.slice(0, 8);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-[80px] font-semibold text-[#1A1A1A] mb-3">
          Our Product Range
        </h2>
        <p className="text-[#666] text-sm sm:text-[18px] font-light leading-relaxed">
          We offer a comprehensive portfolio of veterinary medicines developed under strict <br className="hidden md:block" />
          quality control to ensure effectiveness, safety, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-5">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
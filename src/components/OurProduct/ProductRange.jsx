import { getProducts } from "@/actions/server/Product";
import ProductsCard from "@/components/cards/ProductsCard";
import RangeCard from "../cards/RangeCard";

const ProductRange = async () => {
  const allProducts = await getProducts();
  const products = allProducts.slice(0, 8);

  return (
    /* 
      1. Connected id="top-products" to anchor link.
      2. Added scroll-mt-28 to stop your sticky navbar from cutting off the section header text on scroll.
      3. Added max-w-7xl mx-auto to match the content bounding constraints of your home page layout panels.
    */
    <section 
      id="top-products" 
      className="scroll-mt-28 py-10 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Header Container */}
      <div className="text-center mb-10 sm:mb-14 px-2">
        {/* Adjusted mobile typography from 5xl down to 3xl/4xl so long headings fit cleanly on narrow phone displays */}
        <h2 className="text-5xl xs:text-4xl sm:text-5xl md:text-[72px] font-bold text-[#1a1a1a] tracking-tight leading-tight select-none mb-3">
          Our Product Range
        </h2>
        <p className="text-[#666] text-sm sm:text-[18px] font-light leading-relaxed max-w-3xl mx-auto">
          We offer a comprehensive portfolio of veterinary medicines developed under strict <br className="hidden md:block" />
          quality control to ensure effectiveness, safety, and reliability.
        </p>
      </div>

      {/* 
        Grid Structural Improvements:
        - grid-cols-1: Single column card stack for micro mobile viewports.
        - sm:grid-cols-2: Clean, structured side-by-side split for normal smartphones and tablet displays.
        - md:grid-cols-3: Three items across to prevent large empty spaces on smaller laptop screens.
        - lg:grid-cols-4: Snaps into your intended 4-column desktop configuration cleanly.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full justify-items-center justify-center items-stretch">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductRange;

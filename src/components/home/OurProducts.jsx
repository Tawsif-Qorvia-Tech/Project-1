import { getProducts } from "@/actions/server/Product";
import ProductsCard from "../cards/ProductsCard";

const OurProducts = async () => {
  const products = await getProducts();

  return (
    <section className="pt-32 px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-7xl font-semibold text-[#232323]">Explore Our Products</h2>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center text-slate-400 py-16">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-8xl mx-auto">
          {products.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default OurProducts;

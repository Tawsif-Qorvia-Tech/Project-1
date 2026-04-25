import { getProducts } from "@/actions/server/Product";
import OurProductsWrapper from "./OurProductsWrapper";

const OurProducts = async () => {
  const products = await getProducts();

  return (
    <section className="pt-32 px-8">
      {products.length === 0 ? (
        <div className="text-center text-slate-400 py-16">
          No products found.
        </div>
      ) : (
        <OurProductsWrapper products={products} />
      )}
    </section>
  );
};

export default OurProducts;

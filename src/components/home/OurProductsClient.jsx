'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductsCard from '../cards/ProductsCard';

import 'swiper/css';
import 'swiper/css/pagination';

const OurProductsClient = ({ products, showWishlist = true }) => {
  // Chunking logic stays the same
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  return (
    <div className="max-w-8xl mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: '.products-pagination-container', // Matches the class in Wrapper
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        // These two props prevent the "jumping" behavior on refresh
        observer={true}
        observeParents={true}
        spaceBetween={20}
        slidesPerView={1}
        className="products-swiper"
      >
        {chunkedProducts.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {chunk.map((product) => (
                <ProductsCard
                  key={product._id}
                  product={product}
                  showWishlist={showWishlist}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProductsClient;
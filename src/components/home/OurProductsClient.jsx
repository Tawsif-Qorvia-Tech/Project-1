'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductsCard from '../cards/ProductsCard';

import 'swiper/css';
import 'swiper/css/pagination';

const OurProductsClient = ({ products, paginationRef }) => {
  // Split products into chunks of 4
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  return (
    <div className="max-w-8xl mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        onBeforeInit={(swiper) => {
          if (paginationRef?.current) {
            swiper.params.pagination.el = paginationRef.current;
          }
        }}
        onInit={(swiper) => {
          if (paginationRef?.current) {
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }
        }}
        spaceBetween={0}
        slidesPerView={1}
        className="products-swiper"
      >
        {chunkedProducts.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {chunk.map((product) => (
                <ProductsCard key={product._id} product={product} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProductsClient;
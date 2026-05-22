'use client';

import { useState } from 'react';
import GetQuote from '@/components/buttons/GetQuote';
import QuoteModal from '@/components/shared/QuoteModal';

export default function ProductDetailsClient({ productName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <GetQuote onClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      {/* Form Modal */}
      <QuoteModal
        productName={productName}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

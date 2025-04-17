'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Use dynamic import to avoid SSR issues with Image component
const DynamicImage = dynamic(() => Promise.resolve(Image), { ssr: false });

interface OrderImageThumbnailProps {
  imageUrl?: string | null;
  orderId: number;
}

const OrderImageThumbnail = ({ imageUrl, orderId }: OrderImageThumbnailProps) => {
  const [error, setError] = useState(false);

  if (!imageUrl || error) {
    return (
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs text-gray-500">No img</span>
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
      <DynamicImage
        src={imageUrl}
        alt={`Order #${orderId} image`}
        fill
        style={{ objectFit: 'cover' }}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default OrderImageThumbnail;

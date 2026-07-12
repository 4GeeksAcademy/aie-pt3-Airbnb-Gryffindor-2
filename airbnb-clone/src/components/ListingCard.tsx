import Link from 'next/link';
import type { Accommodation } from '@/types/listings';

interface ListingCardProps {
  listing: Accommodation;
}

export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 text-5xl">
        {listing.image}
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-gray-900">{listing.title}</h3>
          <span className="text-sm font-medium text-gray-700">★ {listing.rating}</span>
        </div>
        <p className="text-sm text-gray-600">{listing.location}</p>
        <p className="text-sm text-gray-600">{listing.description}</p>
        <div className="flex items-center justify-between pt-2 text-sm">
          <span className="font-semibold text-gray-900">${listing.price} noche</span>
          <span className="text-gray-500">{listing.reviews} reseñas</span>
        </div>
      </div>
    </Link>
  );
};

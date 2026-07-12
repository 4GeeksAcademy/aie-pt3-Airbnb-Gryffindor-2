'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { mockListings } from '@/data/mockData';
import type { Room } from '@/types/listings';

const RoomDetailPage = () => {
  const params = useParams();
  const roomId = params.id as string;
  const [listing, setListing] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const found = mockListings.find((item) => item.id === roomId) ?? mockListings[0];
      setListing(found);
      setLoading(false);
    }, 800);

    return () => window.clearTimeout(timer);
  }, [roomId]);

  const photoCount = listing?.images.length ?? 0;
  const nextPhoto = () => {
    if (!photoCount) return;
    setPhotoIndex((current) => (current + 1) % photoCount);
  };
  const prevPhoto = () => {
    if (!photoCount) return;
    setPhotoIndex((current) => (current - 1 + photoCount) % photoCount);
  };

  const totalPrice = useMemo(() => {
    if (!listing) return 0;
    return listing.price * 4;
  }, [listing]);

  if (loading || !listing) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 text-gray-700">
        Cargando habitación...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/catalog" className="text-sm font-medium text-rose-500">
          ← Volver al catálogo
        </Link>

        <section className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm">
          <div className="flex h-72 items-center justify-center bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 text-7xl">
            {listing.images[photoIndex]}
          </div>
          <div className="flex justify-center gap-3 p-4">
            <button
              onClick={prevPhoto}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium"
            >
              Anterior
            </button>
            <button
              onClick={nextPhoto}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium"
            >
              Siguiente
            </button>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <section className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <h1 className="text-3xl font-semibold">{listing.title}</h1>
              <p className="mt-2 text-gray-600">{listing.location}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                <span>★ {listing.rating}</span>
                <span>{listing.reviews} reseñas</span>
              </div>
            </section>

            <section className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-xl">
                  👤
                </div>
                <div>
                  <h2 className="font-semibold">Anfitrión: {listing.host}</h2>
                  <p className="text-sm text-gray-600">{listing.hostYears} años como anfitrión</p>
                </div>
              </div>
            </section>

            <section className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Servicios</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {listing.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3">
                    <span className="text-lg">✓</span>
                    <span className="text-sm font-medium text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <p className="text-2xl font-semibold">${listing.price} <span className="text-sm font-normal text-gray-500">/ noche</span></p>
              <span className="text-sm text-gray-600">★ {listing.rating}</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-700">Huéspedes</p>
                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => setGuests((current) => Math.max(1, current - 1))}
                    className="h-9 w-9 rounded-full border border-gray-300 text-lg"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{guests}</span>
                  <button
                    onClick={() => setGuests((current) => Math.min(listing.guests, current + 1))}
                    className="h-9 w-9 rounded-full border border-gray-300 text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="w-full rounded-full bg-rose-500 px-4 py-3 font-semibold text-white transition hover:bg-rose-600">
                Reservar
              </button>
              <p className="text-center text-sm text-gray-500">Total estimado: ${totalPrice}</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default RoomDetailPage;

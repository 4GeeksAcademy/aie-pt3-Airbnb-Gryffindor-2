'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ListingCard } from '@/components/ListingCard';
import { mockListings } from '@/data/mockData';

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredListings = useMemo(() => {
    const normalized = searchTerm.toLowerCase();
    const filtered = mockListings.filter((listing) => {
      return (
        listing.title.toLowerCase().includes(normalized) ||
        listing.location.toLowerCase().includes(normalized) ||
        listing.category.toLowerCase().includes(normalized)
      );
    });

    return [...filtered].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }, [searchTerm, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-gray-500">{filteredListings.length} resultados</p>
            <h1 className="text-2xl font-semibold">Alojamientos para tu próxima escapada</h1>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">Ordenar por precio</label>
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as 'asc' | 'desc')}
              className="rounded-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Mapa</h2>
              <Link href="/" className="text-sm font-medium text-rose-500">
                Volver al inicio
              </Link>
            </div>
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-100 text-sm font-medium text-gray-500">
              Mapa
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

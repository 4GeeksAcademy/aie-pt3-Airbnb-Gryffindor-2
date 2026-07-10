'use client';

import { useEffect, useMemo, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { CategoryFilters } from '@/components/CategoryFilters';
import { ListingCard } from '@/components/ListingCard';
import { mockListings } from '@/data/mockData';

export default function HomePage() {
  const categories = ['Todos', 'Playa', 'Mansiones', 'Tendencias', 'Cabañas', 'Diseño'];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [listings, setListings] = useState<typeof mockListings>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(mockListings);
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const filteredListings = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();
    return listings.filter((listing) => {
      const matchesCategory = activeCategory === 'Todos' || listing.category === activeCategory;
      const matchesSearch =
        listing.title.toLowerCase().includes(normalizedSearch) ||
        listing.location.toLowerCase().includes(normalizedSearch) ||
        listing.category.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, listings, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-rose-500">Descubre lugares únicos</p>
              <h1 className="text-2xl font-semibold sm:text-3xl">Encuentra el alojamiento perfecto</h1>
            </div>
          </div>
          <CategoryFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </section>

        <section>
          {loading ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center text-gray-600 shadow-sm">
              Cargando alojamientos...
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

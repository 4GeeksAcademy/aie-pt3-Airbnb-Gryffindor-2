import Link from 'next/link';

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Navbar = ({ searchTerm, onSearchChange }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-rose-500">
          <span className="rounded-full bg-rose-500 p-2 text-white">A</span>
          Airbnb
        </Link>

        <label className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm lg:min-w-[320px]">
          <span className="text-lg">🔎</span>
          <input
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="¿Dónde quieres ir?"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>

        <div className="flex items-center justify-end gap-2">
          <button className="rounded-full px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100">
            Hazte anfitrión
          </button>
          <button className="rounded-full border border-gray-300 bg-white p-2 text-lg shadow-sm">
            ☰
          </button>
          <button className="rounded-full border border-gray-300 bg-white p-2 text-lg shadow-sm">
            👤
          </button>
        </div>
      </div>
    </header>
  );
};

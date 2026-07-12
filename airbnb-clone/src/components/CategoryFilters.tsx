interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export const CategoryFilters = ({
  categories,
  activeCategory,
  onSelect,
}: CategoryFiltersProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'border-rose-500 bg-rose-500 text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:border-rose-300 hover:text-rose-500'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

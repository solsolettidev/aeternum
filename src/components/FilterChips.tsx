interface FilterChipsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterChips = ({ filters, activeFilter, onFilterChange }: FilterChipsProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`whitespace-nowrap text-xs font-sans px-4 py-2 rounded-full transition-all duration-300 ${
            activeFilter === filter
              ? "bg-primary text-primary-foreground"
              : "bg-muted/60 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;

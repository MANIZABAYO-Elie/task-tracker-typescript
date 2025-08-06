interface FilterBarProps {
  filters: {
    status: string;
    priority: string;
    category: string;
    due: string;
    user: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<FilterBarProps['filters']>>;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded shadow-md p-4 mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      <select name="status" value={filters.status} onChange={handleChange} className="border p-1 rounded">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>

      <select name="priority" value={filters.priority} onChange={handleChange} className="border p-1 rounded">
        <option value="">All Priorities</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select name="category" value={filters.category} onChange={handleChange} className="border p-1 rounded">
        <option value="">All Categories</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Design</option>
        <option>Meeting</option>
      </select>

      <select name="due" value={filters.due} onChange={handleChange} className="border p-1 rounded">
        <option value="">All Due Dates</option>
        <option>Overdue</option>
        <option>Today</option>
        <option>Upcoming</option>
        <option>No Due Date</option>
      </select>

      <input
        name="user"
        type="text"
        value={filters.user}
        onChange={handleChange}
        placeholder="Filter by user"
        className="border p-1 rounded"
      />
    </div>
  );
}

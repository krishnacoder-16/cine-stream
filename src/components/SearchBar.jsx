import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // We will still call onSearch(value), but Home.jsx will set its own searchQuery state and debounce THAT.
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleChange}
      className="bg-gray-800 text-white px-4 py-2 rounded w-64 focus:outline-none"
    />
  );
};

export default SearchBar;
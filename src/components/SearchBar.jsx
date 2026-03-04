import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
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
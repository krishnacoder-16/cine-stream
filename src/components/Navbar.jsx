import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-black">

      <h1 className="text-3xl font-bold text-red-600">
        CineStream
      </h1>

      <SearchBar onSearch={onSearch} />

    </div>
  );
};

export default Navbar;
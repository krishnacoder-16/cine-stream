import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-black">

      <div className="flex items-center gap-8">
        <Link to="/">
          <h1 className="text-3xl font-bold text-red-600">
            CineStream
          </h1>
        </Link>
        <Link to="/favorites" className="text-white hover:text-red-500 font-medium transition">
          My Favorites
        </Link>
      </div>

      <SearchBar onSearch={onSearch} />

    </div>
  );
};

export default Navbar;
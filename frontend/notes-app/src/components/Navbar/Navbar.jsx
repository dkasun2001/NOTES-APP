import ProfileInfo from "../cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
// import "./navbar.css";

const Navbar = () => {
  const [searchQtery, setSearchQtery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQtery("");
  };

  return (
    <div className="navbar bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-x1 font-medium text-black py-2 ">DK - Notes</h2>

      <SearchBar
        value={searchQtery}
        onChange={({ target }) => {
          setSearchQtery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;

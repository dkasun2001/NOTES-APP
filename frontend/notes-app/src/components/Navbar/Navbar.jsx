import ProfileInfo from "../cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-x1 font-medium text-black py-2 ">DK - Notes</h2>

      <SearchBar />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;

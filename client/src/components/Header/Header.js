import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="pt-4 pb-6">
      <Link to="/">
        <h1 className="text-2xl text-center font-semibold header-text">
          CinePicks
        </h1>
      </Link>
    </header>
  );
};

export default Header;

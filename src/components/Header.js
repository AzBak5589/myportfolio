import NavLinks from "./NavLinks";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Aziz Bakayoko' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;

import "./style.css";
import bg from "./bg.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <img src={bg} alt="header-bg" />
        <h1 className="heading1">CASE ENCANTADA</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          fugiat.
        </p>
      </header>
    </>
  );
}

export default Header;

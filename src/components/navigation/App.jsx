import "./style.css";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="logo">
          <li>
            <a href="#">
              <span className="material-symbols-rounded">home_app_logo</span>
              <p>MODERA</p>
            </a>
          </li>
        </ul>
        <div className="container">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
          <ul className="contact">
            <li>
              <a href="#">
                <p>Contact now</p>
                <span className="material-symbols-rounded">trending_flat</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

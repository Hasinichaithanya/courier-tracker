import { Link } from "react-router-dom";
import { Component } from "react";

class Header extends Component {
  state = {
    menu: false,
  };

  mobileMenu = () => {
    this.setState((prev) => ({ menu: !prev.menu }));
  };

  render() {
    const { menu } = this.state;
    return (
      <>
        <nav className="header-container-mobile">
          <button type="button" onClick={this.mobileMenu}>
            <img
              src="https://res.cloudinary.com/dlnpuom7o/image/upload/v1698126575/menu_zhzmbs.png"
              className="menu"
              alt="menu"
            />
          </button>
        </nav>
        <div>
          {menu && (
            <ul className="mobile-nav-items">
              <li key="1">
                <Link to="/admin">Admin</Link>
              </li>

              <li key="2">
                <Link to="/">Track Order</Link>
              </li>
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default Header;

function Header() {
  return (
    <header
      className="header"
      style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}
    >
      <div className="wrapper">
        <nav className="navbar">
          <a href="#" className="logo-link">
            <img
              src="./assets/images/Locus-logo-min.svg"
              className="logo-img"
              alt="Logo"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

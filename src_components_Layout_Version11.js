import * as React from "react";
import { Link, navigate } from "gatsby";
import "../styles/global.css";

const navLinks = [
  { to: "/", label: "Home" },
  // { to: "/new-machinery", label: "New Machinery" }, // HIDDEN
  { to: "/used-machinery", label: "Used Machinery" },
  { to: "/custom-applications", label: "Custom Applications" },
  { to: "/sell-with-mcm-group", label: "Sell with MCM Group" },
  // { to: "/testimonials", label: "Testimonials" }, // HIDDEN
];

const partners = [
  {
    name: "Acme Manufacturing",
    logo: "/images/partner-acme.png",
    url: "https://www.acmemfg.com"
  },
  {
    name: "Prime Robotics",
    logo: "/images/partner-prime-robotics.png",
    url: "https://www.primerobotics.com"
  },
  {
    name: "Super Conveyor Corp",
    logo: "/images/partner-super-conveyor.png",
    url: "https://www.superconveyor.com"
  },
];

import ContactUsSection from "./ContactUsSection";

export default function Layout({ children, showHero = false }) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const close = () => setOpen(false);
    const resizeListener = () => {
      if (window.innerWidth > 900) close();
    };
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const escListener = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", escListener);
    return () => document.removeEventListener("keydown", escListener);
  }, [open]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length > 0) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setOpen(false);
    }
  };

  return (
    <>
      <nav className="nav-main">
        <div className="nav-brand">
          <Link to="/">MCM Group</Link>
        </div>
        <form className="nav-search-form" onSubmit={handleSearchSubmit} role="search">
          <input
            type="search"
            className="nav-search-input"
            placeholder="Search…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search site"
          />
          <button type="submit" className="nav-search-btn" aria-label="Search">
            <span role="img" aria-label="search">🔍</span>
          </button>
        </form>
        <button
          className="nav-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <ul className={`nav-links-dropdown${open ? " open" : ""}`} id="nav-menu">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeClassName="active"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {showHero && (
        <>
          <header className="hero-header">
            {/* New Machinery section is hidden */}
            {/* <section className="hero-section">
              <h2>New Machinery</h2>
              <p>Discover the latest machinery models with advanced technology and reliability for your business.</p>
              <Link to="/new-machinery" className="hero-cta">View New Machinery</Link>
            </section> */}
            <section className="hero-section">
              <h2>Used Machinery</h2>
              <p>Browse a curated selection of quality used machinery at competitive prices.</p>
              <Link to="/used-machinery" className="hero-cta">View Used Machinery</Link>
            </section>
            <section className="hero-section">
              <h2>Custom Applications</h2>
              <p>Learn about our bespoke solutions and custom machinery builds for unique industrial needs.</p>
              <Link to="/custom-applications" className="hero-cta">See Custom Work</Link>
            </section>
          </header>
          <section className="partners-section">
            <div className="partners-title">Our Trusted Partners</div>
            <ul className="partners-list">
              {partners.map((partner) => (
                <li key={partner.name} className="partner-item">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" title={partner.name}>
                    <img
                      src={partner.logo}
                      alt={partner.name + " logo"}
                      className="partner-logo"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <ContactUsSection />
        </>
      )}
      <main>{children}</main>
      <footer
        style={{
          marginTop: "3em",
          padding: "2em",
          borderTop: "2px solid #c1121f",
          textAlign: "center",
          color: "#888",
        }}
      >
        &copy; {new Date().getFullYear()} SDCSolutions Machinery
      </footer>
    </>
  );
}
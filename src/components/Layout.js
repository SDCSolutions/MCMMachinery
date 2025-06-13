import * as React from "react";
import { Link, navigate } from "gatsby";
import "../styles/global.css";
import ContactUsSection from "./ContactUsSection";

const navLinks = [
  { to: "/", label: "Home" },
  // { to: "/new-machinery", label: "New Machinery" }, // HIDDEN
  { to: "/used-machinery", label: "Used Machinery" },
  { to: "/custom-applications", label: "Custom Applications" },
  { to: "/sell-with-mcm-group", label: "Sell with MCM Group" },
  // { to: "/testimonials", label: "Testimonials" }, // HIDDEN
];

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
          <img src="/images/Favicon.png" alt="Company Logo"></img>
          <Link to="/"> MCM Group</Link>
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
      
      <main>{children}</main>
      <ContactUsSection/>
      <footer
        style={{
          marginTop: "3em",
          padding: "2em",
          borderTop: "2px solid #c1121f",
          textAlign: "center",
          color: "#888",
        }}
      >
        &copy; {new Date().getFullYear()} MCM Group
      </footer>
    </>
  );
}
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";


// Example background images (place your images in /images/ directory)
const heroBackgrounds = {
  usedMachinery: "/images/used-machinery-bg.png",
  customApplications: "/images/custom-applications-bg.png",
  // If you ever unhide new machinery, add: newMachinery: "/images/new-machinery-bg.jpg"
};

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

export default function HomePage() {
  return (
    <Layout showHero={false}>
      <header className="hero-header">
        {/* New Machinery section is hidden */}
        {/* <section className="hero-section" 
                  style={{
            backgroundImage: `url(${heroBackgrounds.newMachinery})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            position: "relative"
          }}>
          <h2>New Machinery</h2>
          <p>Discover the latest machinery models with advanced technology and reliability for your business.</p>
          <Link to="/pages/new-machinery.js" className="hero-cta">View New Machinery</Link>
        </section> */}
        <section className="hero-section"           
            style={{
            backgroundImage: `url(${heroBackgrounds.usedMachinery})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            position: "relative"
          }}>
          <h2>Used Machinery</h2>
          <p>Browse a curated selection of quality used machinery at competitive prices.</p>
          <Link to="/used-machinery" className="hero-cta">View Used Machinery</Link>
        </section>
        <section className="hero-section"
            style={{
            backgroundImage: `url(${heroBackgrounds.customApplications})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            position: "relative"
          }}>
          <h2>Custom Applications</h2>
          <p>Learn about our bespoke solutions and custom machinery builds for unique industrial needs.</p>
          <Link to="/custom-applications" className="hero-cta">View Custom Work</Link>
        </section>
      </header>
      {/*<section className="partners-section">
        <div className="partners-title">Our Trusted Partners</div>
        <ul className="partners-list">
          {partners.map((partner) => (
            <li key={partner.name} className="partner-item">
              <a href={partner.url} target="_blank" rel="noopener noreferrer" title={partner.name}>
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="partner-logo"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>*/}
      
    </Layout>
  );
}
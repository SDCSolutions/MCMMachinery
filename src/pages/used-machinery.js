import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "./used-machinery.css";

const usedMachineryList = [
  {
    name: "Hydraulic Press 2000T",
    image: "/images/used/hydraulic-press.jpg",
    year: 2018,
    description: "Robust hydraulic press suitable for heavy-duty industrial applications. Well-maintained, includes safety guards.",
    detailsLink: "/used-machinery/hydraulic-press-2000t"
  },
  {
    name: "Industrial Conveyor Belt",
    image: "/images/used/conveyor-belt.jpg",
    year: 2019,
    description: "High-capacity conveyor system with adjustable speed. Ideal for packaging and assembly lines.",
    detailsLink: "/used-machinery/industrial-conveyor-belt"
  },
  {
    name: "CNC Milling Machine",
    image: "/images/used/cnc-milling.jpg",
    year: 2017,
    description: "Precision CNC milling machine, recently serviced. Perfect for custom fabrication and prototyping.",
    detailsLink: "/used-machinery/cnc-milling-machine"
  },
];

export default function UsedMachineryPage() {
  return (
    <Layout>
      <main className="used-machinery-main">
        <h1 className="used-machinery-title">Used Machinery</h1>
        <p className="used-machinery-description">
          Browse our current inventory of quality used machinery. All machines are inspected and serviced before sale.
        </p>
        <div className="used-machinery-list">
          {usedMachineryList.map((item) => (
            <div key={item.name} className="used-machinery-card">
              <img
                src={item.image}
                alt={item.name}
                className="used-machinery-image"
              />
              <h2 className="used-machinery-card-title">{item.name}</h2>
              <div className="used-machinery-card-year">
                Year: {item.year}
              </div>
              <div className="used-machinery-card-desc">
                {item.description}
              </div>
              <Link
                to={item.detailsLink}
                className="hero-cta"
                style={{ marginTop: "auto" }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
import * as React from "react";
import Layout from "../components/Layout";

// Mock data for demonstration; replace with your actual machinery/products data or API calls.
const sampleMachinery = [
  {
    name: "Hydraulic Press 2000T",
    description: "Robust hydraulic press suitable for heavy-duty industrial applications.",
    year: 2018,
    category: "Press",
    link: "/used-machinery/hydraulic-press-2000t",
  },
  {
    name: "Industrial Conveyor Belt",
    description: "High-capacity conveyor system with adjustable speed.",
    year: 2019,
    category: "Conveyor",
    link: "/used-machinery/industrial-conveyor-belt",
  },
  {
    name: "CNC Milling Machine",
    description: "Precision CNC milling machine, recently serviced.",
    year: 2017,
    category: "Milling",
    link: "/used-machinery/cnc-milling-machine",
  },
  // Add more items as needed
];

export default function SearchPage() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState(sampleMachinery);

  // Filter results when query changes
  React.useEffect(() => {
    if (!query.trim()) {
      setResults(sampleMachinery);
    } else {
      const lowerQuery = query.toLowerCase();
      setResults(
        sampleMachinery.filter(
          item =>
            item.name.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery) ||
            (item.category && item.category.toLowerCase().includes(lowerQuery)) ||
            (item.year && String(item.year).includes(lowerQuery))
        )
      );
    }
  }, [query]);

  return (
    <Layout>
      <main style={{ maxWidth: 900, margin: "2em auto", padding: "1.5em" }}>
        <h1 style={{ color: "#c1121f", textAlign: "center" }}>Search Our Inventory</h1>
        <div style={{ textAlign: "center", marginBottom: "2em" }}>
          <input
            type="text"
            placeholder="Search for machinery, category, or year..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: "90%",
              maxWidth: "400px",
              padding: "0.7em 1em",
              borderRadius: "0.8em",
              border: "1.5px solid #c1121f",
              fontSize: "1em",
              marginBottom: "0.5em",
              outline: "none",
              boxShadow: "0 2px 6px rgba(193,18,31,0.04)",
            }}
          />
        </div>
        <div>
          {results.length === 0 ? (
            <div style={{ textAlign: "center", color: "#c1121f" }}>
              No results found for "<strong>{query}</strong>".
            </div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {results.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    background: "#fafafa",
                    borderRadius: "1em",
                    boxShadow: "0 2px 8px rgba(193, 18, 31, 0.06)",
                    margin: "1em 0",
                    padding: "1.2em",
                  }}
                >
                  <a
                    href={item.link}
                    style={{
                      fontSize: "1.25em",
                      color: "#c1121f",
                      fontWeight: "bold",
                      textDecoration: "none"
                    }}
                  >
                    {item.name}
                  </a>
                  <div style={{ color: "#444", margin: "0.6em 0 0.3em 0" }}>
                    {item.description}
                  </div>
                  <div style={{ color: "#777", fontSize: "0.95em" }}>
                    {item.category && <>Category: {item.category} &nbsp; | </>}
                    Year: {item.year}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </Layout>
  );
}
import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SellWithMCMContact from "../components/SellWithMCMContact";

export default function SellWithMCM() {
  return (
    <Layout>
      <main style={{ maxWidth: 800, margin: "2em auto", padding: "1.5em" }}>
        <h1 style={{ color: "#c1121f", textAlign: "center" }}>Sell With MCM</h1>
        <p style={{ textAlign: "center", marginBottom: "2em" }}>
          Partner with MCM Group to sell your used industrial machinery quickly and efficiently. We connect sellers with qualified buyers, ensuring a smooth and transparent transaction process.
        </p>

        <section style={{
          background: "#fafafa",
          borderRadius: "1em",
          boxShadow: "0 2px 8px rgba(193, 18, 31, 0.06)",
          padding: "2em",
          marginBottom: "2em"
        }}>
          <h2 style={{ color: "#c1121f" }}>How It Works</h2>
          <ol style={{ paddingLeft: "1.5em" }}>
            <li>
              <strong>Submit Your Machinery Details:</strong> Fill out our simple form with information and photos of the machinery you wish to sell.
            </li>
            <li>
              <strong>Machinery Evaluation:</strong> Our team will review your submission and may contact you for additional details.
            </li>
            <li>
              <strong>Listing & Promotion:</strong> We list your equipment on our platform and your listing is marketed across our global partner and buyer channels.
            </li>
            <li>
              <strong>Secure Transaction:</strong> Once a buyer is found, we coordinate logistics and oversee a secure, transparent sale.
            </li>
          </ol>
        </section>

        <section style={{
          background: "#fff3f4",
          borderRadius: "1em",
          boxShadow: "0 1px 5px rgba(193, 18, 31, 0.04)",
          padding: "2em",
          marginBottom: "2em"
        }}>
          <h2 style={{ color: "#c1121f" }}>Ready to Sell?</h2>
          <p>
            Fill out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWp9TaGlu2qlyShStrPJin7EiYkzXoaiXshrH74gqh-Msheg/viewform" style={{ color: "#c1121f", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">Sell With MCM form</a> to get started or <Link to="#contact" style={{ color: "#c1121f", textDecoration: "underline" }}>contact our team</Link> for more information.
          </p>
        </section>        
        <section style={{
          background: "#fafafa",
          borderRadius: "1em",
          boxShadow: "0 2px 8px rgba(193, 18, 31, 0.06)",
          padding: "2em",
        }}>
          <h2 style={{ color: "#c1121f" }}>Why Sell With MCM?</h2>
          <ul style={{ paddingLeft: "1.5em" }}>
            <li>Extensive network of qualified buyers</li>
            <li>Expert evaluation and fair market pricing</li>
            <li>Professional, transparent sales process</li>
            <li>Comprehensive marketing for your equipment</li>
            <li>Personalized support from start to finish</li>
          </ul>
        </section>

        
        <section id="contact" style={{ marginTop: "2em" }}>
          <SellWithMCMContact />
        </section>
      </main>
    </Layout>
  );
}
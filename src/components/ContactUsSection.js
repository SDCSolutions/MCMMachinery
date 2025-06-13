import * as React from "react";

export default function ContactUsSection() {


  return (
    
      <section style={{ maxWidth: 900, margin: "2em auto", padding: "1.5em" }}>
        <div id = "contact" style={{ position: "relative", width: "100%", paddingBottom: "95vh", height: 0, overflow: "hidden", borderRadius: "1em", boxShadow: "0 2px 8px rgba(193, 18, 31, 0.08)" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdp_d_BjzOLhn44enOWML_CFifYWBbaDWAfXV682wTlRGQ9ww/viewform?embedded=true"
            title="Contact Form"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              background: "#fff",
              minHeight: 480,
              borderRadius: "1em",
            }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    
  );
}

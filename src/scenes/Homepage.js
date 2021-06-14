import React from "react";
import Section from "elements/Section";
import Header from "parts/Header";
import Hero from "parts/Hero";

export default function Homepage() {
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <Hero></Hero>
        </Section>
      </main>
    </div>
  );
}

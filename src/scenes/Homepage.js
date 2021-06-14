import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Section";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Client from "parts/Client";

export default function Homepage() {
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <Hero></Hero>
        </Section>
        <Fade bottom delay={600}>
          <Section className="clients">
            <Client></Client>
          </Section>
        </Fade>
      </main>
    </div>
  );
}

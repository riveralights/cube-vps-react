import React from "react";
import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import Section from "elements/Section";
import Hero from "parts/Hero";
import Client from "parts/Client";
import Feature from "parts/Feature";

// Image Feature
import Tile01 from "assets/images/feature-tile-icon-01.svg";
import Tile02 from "assets/images/feature-tile-icon-02.svg";
import Tile03 from "assets/images/feature-tile-icon-03.svg";

export default function Homepage() {
  // Object Features
  const features = [
    {
      imgSrc: Tile01,
      imgAlt: "Feature tile icon 01",
      title: "Join the System",
      description:
        "Mari bergabung kedalam sistem yang sangat cepat sampai anda tidak akan menyadarinya",
    },
    {
      imgSrc: Tile02,
      imgAlt: "Feature tile icon 02",
      title: "High Performance",
      description:
        "Nikmati performa mesin server kami yang cepat. Tidak ada waktu menunggu, data mu akan tersaji sangat cepat",
    },
    {
      imgSrc: Tile03,
      imgAlt: "Feature tile icon 03",
      title: "Security? Don't Worry",
      description:
        "Sistem kami dilengkapi dengan berbagai macam proteksi dari kejahatan cyber. Jangan ragu karena kamu melakukan backup berkala",
    },
  ];

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
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 200}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

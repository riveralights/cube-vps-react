import React from "react";
import Fade from "react-reveal/Fade";

import Section from "elements/Section";
import Card from "elements/Card";
import CardList from "elements/CardList";

import Header from "parts/Header";
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

  // List Price Array
  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Cocok untuk kamu yang mau mencoba",
      featureList: [
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: false, content: "Gratis penyimpanan 50GB" },
        { isChecked: false, content: "Gratis penyimpanan 50GB" },
      ],
    },
    {
      price: 28,
      currencySymbol: "$",
      description: "Cocok untuk kamu yang mau mencoba",
      featureList: [
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: false, content: "Gratis penyimpanan 50GB" },
      ],
    },
    {
      price: 29,
      currencySymbol: "$",
      description: "Cocok untuk kamu yang mau mencoba",
      featureList: [
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
        { isChecked: true, content: "Gratis penyimpanan 50GB" },
      ],
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
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Pilih Paket Berlangganan</h2>
                  <p className="m-0">
                    Sesuaikan dengan kebutuhan kamu, setiap paket memiliki
                    kelebihan masing-masing. Jadi, tunggu apa lagi?
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                <Fade bottom delay={200}>
                  {listPricing.map((list, index) => (
                    <Card key={index}>
                      <div className="tiles-item-inner has-shadow">
                        <div className="pricing-item-content">
                          <div className="pricing-item-header pb-24 mb-24">
                            <div className="pricing-item-price mb-4">
                              <span className="pricing-item-price currency h2">
                                {list.currencySymbol}
                              </span>
                              <span className="pricing-item-price-amount h1 pricing-switchable">
                                {list.price}
                              </span>
                            </div>
                            <div className="text-xs text-color-low">
                              {list.description}
                            </div>
                          </div>
                          <div className="pricing-item-features mb-40">
                            <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                              Apa Saja didalamnya?
                            </div>
                            <CardList
                              isSmall
                              className="pricing-item-features-list"
                              data={list.featureList}
                            ></CardList>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

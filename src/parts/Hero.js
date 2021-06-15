import React from "react";
import Fade from "react-reveal/Fade";

// Image
import HeroImage from "assets/images/hero-image.png";

export default function Hero() {
  return (
    <div className="container-sm">
      <div className="hero-inner section-inner">
        <div className="hero-content">
          <Fade bottom delay={200}>
            <h1 className="mt-0 mb-16">Cube VPS</h1>
          </Fade>
          <div className="container-xs">
            <Fade bottom delay={400}>
              <p className="mt-0 mb-32">
                Kami menyediakan Virtual Private Server yang cepat dan
                berkualitas tinggi. Pilih fitur dan harga sesuai keinginan anda
              </p>
            </Fade>
          </div>
        </div>
        <div className="hero-figure illustration-element-01">
          <Fade bottom delay={600}>
            <img
              className="has-shadow"
              src={HeroImage}
              alt="Hero image"
              width="896"
              height="504"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}

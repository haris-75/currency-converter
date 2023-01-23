import React, { useState } from 'react';
import HeroBannerPrimary from '../assets/img/hero-banner-1.svg';
import HeroBannerSecondary from '../assets/img/hero-banner-2.svg';

export default function MainScreen() {
  const [heroBannerFlag, setHeroBannerFlag] = useState(false);
  return (
    <div className="container vh-100">
      <div className="row align-items-center justify-content-between vh-100 mt--5">
        <div className="col-lg-6 col-md-8 col-sm-12 d-flex flex-column align-items-center">
          <p className="display-1">Currency </p>
          <p className="display-1">Converter</p>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img
            src={heroBannerFlag ? HeroBannerPrimary : HeroBannerSecondary}
            alt="hero-banner"
          />
        </div>
      </div>
      <div>
        <button
          className="btn btn-outline-warning"
          onClick={() => setHeroBannerFlag(!heroBannerFlag)}
        >
          Lets start
        </button>
      </div>
    </div>
  );
}

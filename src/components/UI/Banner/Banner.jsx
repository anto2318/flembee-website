import React from "react";

import { TECHNOLOGIES } from "../../../assets/data/data";

import "./styles.scss";

export function Banner () {
  return (
    <section>
      <div className="slider">
        <div className="slide-track">
          {TECHNOLOGIES.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.image} alt={item.name} height="50" width="50" style={{marginTop: 25}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
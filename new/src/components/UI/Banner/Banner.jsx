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
              <img src={item.image} alt={item.name} height="60" width="60" style={{marginTop: 20}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
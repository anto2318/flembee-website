import React from "react";

import "./common-section.css";

import { Container } from "reactstrap";

export function CommonSection ({title, subtitle}) {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </Container>
    </section>
  );
};
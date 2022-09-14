import React from "react";
import { ServiceCard } from "../../../";

import "./modal.css";

export function Modal ({event, setViewingEvent}) {

  return (
    <div className="modal__wrapper">
      <div className="single__modal" style={{width: 310, height: "auto", padding: 0}}>
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setViewingEvent(false)}></i>
        </span>
          <ServiceCard item={event} isCreate={true} />
      </div>
    </div>
  );
};

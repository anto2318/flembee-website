import React, { useState } from "react";

import { Modal } from "../Modal";

export function ServiceCard ({item, messages}) {
  const { name, description, image, background } = item;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
        <div style={{
            width: "310px", padding:"20px", margin: "0 auto", height: "600px", 
            background: background, borderRadius: "10px", boxShadow: "0 0 1rem rgba(0,0,0,0.1)"}}>
          <div style={{width: "270px", height: "260px", textAlign: "center"
        }}>
            <img src={image} alt="" 
                style={{
                  borderRadius: "10px", width: "auto", height : "auto", maxHeight: "100%", maxWidth: "100%"
                }}/>
          </div>
      
          <div style={{height: "230px"}}>
            <h5 className="element__title" style={{color: "black", textAlign: "center"}}>
              {name}
            </h5>
            <div className="creator__info-wrapper d-flex gap-3">
              <p style={{color: "black", textAlign: "center", lineHeight: "30px"}}>{description}</p>
            </div>
          </div>
          <div className="mt-3 d-flex align-items-center justify-content-center">
              <button
                className="bid__btn d-flex align-items-center gap-1"
                onClick={() => setShowModal(true)}
              >
                <i className="ri-information-line"></i> { messages.readMore }
              </button>
            </div>
      </div>
    </>
  );
}

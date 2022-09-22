import React, { useState } from "react";

import { Modal } from "../Modal";

export function ProjectCard ({item}) {
  const { name, description, image } = item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} />}
        <div style={{width: "310px", padding:"20px", height: "340px", 
                      background: "white", borderRadius: "10px", 
                      boxShadow: "0 0 1rem rgba(235,98,98,0.2)", cursor: "pointer"}}>
          <div style={{width: "270px", height: "150px", textAlign: "center"}}>
            <img src={image} alt="" 
                style={{
                  borderRadius: "10px", width: "auto", height : "auto", maxHeight: "100%", maxWidth: "100%"
                }}/>
          </div>
      
          <div style={{marginTop: "15px"}}>
            <h5 className="element__title" style={{color: "black", textAlign: "center"}}>
              {name}
            </h5>
            <div className="creator__info-wrapper d-flex gap-3">
              <p style={{color: "black", textAlign: "center", lineHeight: "25px"}}>{description}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

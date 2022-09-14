import React, { useState } from "react";

import { Modal } from "../Modal";

import img01 from "../../../assets/svg/web-development.svg";
import img02 from "../../../assets/svg/mobile-development.svg";
import img03 from "../../../assets/svg/ui-uix.svg";
import img04 from "../../../assets/svg/devops.svg";
import img05 from "../../../assets/svg/qa.svg";

export function ProjectCard ({item}) {
  const { name, description, image } = item;

  const [showModal, setShowModal] = useState(false);

  const getImage = (img) => {
    switch (img) {
      case "img01":
        return img01;
      case "img02":
        return img02;
      case "img03":
        return img03;
      case "img04":
        return img04;
      case "img05":
        return img05;
      default:
        break;
    }
  };

  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} />}
        <div style={{width: "310px", padding:"20px", height: "310px", 
                      background: "white", borderRadius: "10px", 
                      boxShadow: "0 0 1rem rgba(235,98,98,0.2)", cursor: "pointer"}}>
          <div style={{width: "270px", height: "150px", textAlign: "center"}}>
            <img src={getImage(image)} alt="" 
                style={{
                  borderRadius: "10px", width: "auto", height : "auto", maxHeight: "100%", maxWidth: "100%"
                }}/>
          </div>
      
          <div style={{marginTop: "15px"}}>
            <h6 className="element__title" style={{color: "black", textAlign: "center"}}>
              {name}
            </h6>
            <div className="creator__info-wrapper d-flex gap-3">
              <p style={{color: "black", textAlign: "center"}}>{description}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

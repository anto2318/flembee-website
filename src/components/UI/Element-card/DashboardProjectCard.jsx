import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Modal } from "../Modal";

import img01 from "../../../assets/images/img-01.jpeg";
import img02 from "../../../assets/images/img-02.jpeg";
import img03 from "../../../assets/images/img-03.jpeg";
import img04 from "../../../assets/images/img-04.jpeg";
import img05 from "../../../assets/images/img-05.jpeg";
import img06 from "../../../assets/images/img-06.jpeg";
import img07 from "../../../assets/images/img-07.jpeg";
import img08 from "../../../assets/images/img-08.jpeg";
import img09 from "../../../assets/images/img-09.jpeg";

import ava01 from "../../../assets/images/ava-01.png";
import ava02 from "../../../assets/images/ava-02.png";
import ava03 from "../../../assets/images/ava-03.png";
import ava04 from "../../../assets/images/ava-04.png";
import ava05 from "../../../assets/images/ava-05.png";
import ava06 from "../../../assets/images/ava-06.png";

export function DashboardProjectCard ({item}) {
  let navigate = useNavigate();

  const { _id, name, location, spaceImage, avatarImage, price } = item;

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
      case "img06":
        return img06;
      case "img07":
        return img07;
      case "img08":
        return img08;
      case "img09":
        return img09;
      case "ava01":
        return ava01;
      case "ava02":
        return ava02;
      case "ava03":
        return ava03;
      case "ava04":
        return ava04;
      case "ava05":
        return ava05;
      case "ava06":
        return ava06;
      default:
        break;
    }
  };
  
  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} />}
      <div className="d-flex flex-column" 
          style={{
            border: "1px solid #eb6262", background: "#fff", borderRadius: "10px", width: 310
      }}>
        <div className="p-3" style={{alignSelf: 'center'}}>
          <img src={getImage(spaceImage)} alt="" 
                  style={{
                    borderRadius: "10px", width: "auto", height : 200, maxHeight: "100%", maxWidth: "100%"
                  }}/>
        </div>
        <div className="px-4" >
          <h5 className="element__title">
            {name}
          </h5>
        </div>
        <div className="p-3 d-flex flex-row">
          <div className="creator__img">
            <img src={getImage(avatarImage)} alt="" className="w-100" />
          </div>
          <div className="px-4 d-flex flex-column">
            <div>
              <h6 style={{color: 'black', fontSize: '0.6rem'}}>Location</h6>
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <h6 style={{color: 'black', fontSize: '0.6rem'}}>Price</h6>
            <p>{price} $</p>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => navigate(`/spaces/${_id}`)}
          >
            <i className="ri-eye-line"></i> Visualizar
          </button>
        </div>
      </div>
    </div>
  );
}
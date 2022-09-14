import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

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

import img10 from "../../../assets/images/img-10.jpeg";
import img11 from "../../../assets/images/img-11.jpeg";
import img12 from "../../../assets/images/img-12.jpeg";
import img13 from "../../../assets/images/img-13.jpeg";
import img14 from "../../../assets/images/img-14.jpeg";
import img15 from "../../../assets/images/img-15.jpeg";
import img16 from "../../../assets/images/img-16.jpeg";
import img17 from "../../../assets/images/img-17.jpeg";
import img18 from "../../../assets/images/img-18.jpeg";

import ava01 from "../../../assets/images/ava-01.png";
import ava02 from "../../../assets/images/ava-02.png";
import ava03 from "../../../assets/images/ava-03.png";
import ava04 from "../../../assets/images/ava-04.png";
import ava05 from "../../../assets/images/ava-05.png";
import ava06 from "../../../assets/images/ava-06.png";

export function DashboardEventCard ({item, isCreate}) {
  const { name, image, price, host } = item;

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

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
      case "img10":
        return img10;
      case "img11":
        return img11;
      case "img12":
        return img12;
      case "img13":
        return img13;
      case "img14":
        return img14;
      case "img15":
        return img15;
      case "img16":
        return img16;
      case "img17":
        return img17;
      case "img18":
        return img18;
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
      <div style={{width: "310px", padding:"20px", background: "#343444", borderRadius: "10px"}}>
        <div style={{width: "270px", height: "280px", textAlign: "center"}}>
          <img src={getImage(image)} alt="" 
            style={{
              borderRadius: "10px", width: "auto", height : "auto", maxHeight: "100%", maxWidth: "100%"
            }}/>
        </div>
      
        <div style={{height: "140px"}}>
          <h5 className="element__title" style={{color: 'white'}}>
            {name}
          </h5>
          <div className="creator__info-wrapper d-flex gap-3">
            <div className="creator__img">
              <img src={getImage(host.userImage)} alt="" className="w-100" />
            </div>
            <div className="creator__info w-100 d-flex align-items-center justify-content-between">
              <div>
                <h6>Created By</h6>
                <p>{host.name}</p>
              </div>
    
              <div>
                <h6>Price</h6>
                <p>{price} $</p>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex align-items-center justify-content-between">
            <button
              className="bid__btn d-flex align-items-center gap-1"
              onClick={() => navigate('/dashboard/create-event')}
            >
              <i className="ri-edit-line"></i> Editar
            </button>
            <span className="history__link">
              <Link to="#" style={{color: 'red'}}
                onClick={() => setShowModal(true)}><i className="ri-delete-bin-line"></i> Eliminar</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

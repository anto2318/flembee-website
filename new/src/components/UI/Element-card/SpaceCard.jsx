import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

export function SpaceCard ({item, isCreate}) {
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
      <div className="d-flex flex-column" style={{background: "#343444", borderRadius: "10px", width: 310}}>
        <div className="p-3" style={{alignSelf: 'center'}}>
          <img src={getImage(spaceImage)} alt="" 
                  style={{
                    borderRadius: "10px", width: "auto", height : 200, maxHeight: "100%", maxWidth: "100%"
                  }}/>
        </div>
        <div className="px-4" >
          <h5 className="element__title">
            <Link to={`/spaces/${_id}`}>{name}</Link>
            {/* { isCreate ? {name}
              : <Link to={`/spaces/${_id}`}>{name}</Link>
            } */}
          </h5>
        </div>
        <div className="p-3 d-flex flex-row">
          <div className="creator__img">
            <img src={getImage(avatarImage)} alt="" className="w-100" />
          </div>
          <div className="px-4 d-flex flex-column">
            <div>
              <h6 style={{color: 'white', fontSize: '0.6rem'}}>Location</h6>
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <h6 style={{color: 'white', fontSize: '0.6rem'}}>Price</h6>
            <p>{price} $</p>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => navigate(`/spaces/${_id}`)}
          >
            <i className="ri-shopping-bag-line"></i> Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
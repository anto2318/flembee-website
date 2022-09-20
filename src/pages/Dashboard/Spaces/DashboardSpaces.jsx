import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { CommonSection, DashboardProjectCard } from "../../../components";

import {
  getUserSpacesListProcess,
} from '../../../redux/actions';

import "./styles.css";

export function DashboardSpaces () {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const {
      user,
  } = useSelector((state) => state.user);

  // const [spacesData, setSpacesData] = useState(spaces);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) dispatch(getUserSpacesListProcess())

    return () => {
        isMounted = false;
    };
}, [dispatch]);

//   useEffect(() => {
//     let isMounted = true;

//     if (isMounted) {
//       setSpacesData(spaces)
//     }

//     return () => {
//         isMounted = false;
//     };
// }, [dispatch, spaces, spacesData]);


  const handleCategory = () => {};

  const handleItems = () => {};

  const handleSort = (e) => {
    // const filterValue = e.target.value;

    // if (filterValue === "high")
    //   spacesData.sort((a, b) => a.price - b.price);
  
    // if (filterValue === "low")
    //   spacesData.sort((a, b) => b.price - a.price);

    //   setSpacesData()
  };

  return (
    <>
      <CommonSection title={"Stay up to date with the progress of your projects"} 
                    subtitle={"Keep track of what we do for you."}/>

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="mb-5">
                <div className="market__product__filter d-flex align-items-center justify-content-between">
                  <div className="filter__left d-flex align-items-center gap-5">
                    <input type="text" className="newsletter" placeholder="Search" />
                  </div>

                  <div className="filter__right">
                    <button className="create__btn d-flex align-items-center gap-2"
                            onClick={() => navigate('/dashboard/create-space')}>
                      <i className="ri-calendar-line"></i>Schedule a call
                    </button>
                  </div>
                </div>
              </Col>
              {user.userSpaces?.map((item) => (
                <Col xxl="3" xl="4" lg="4" md="6" sm="7"  xs="8"  className="mb-4" key={item._id}>
                  <DashboardProjectCard item={item} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

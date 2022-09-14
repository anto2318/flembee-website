import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from "reactstrap";

import { useNavigate } from "react-router-dom";

import { CommonSection, DashboardEventCard } from "../../../components";

import {
  getUserEventsListProcess,
} from '../../../redux/actions';

import "./styles.css";

export function DashboardEvents () {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
      user,
  } = useSelector((state) => state.user);

  // const [eventsData, setEventsData] = useState(user);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) dispatch(getUserEventsListProcess())

    return () => {
        isMounted = false;
    };
}, [dispatch]);

// useEffect(() => {
//   let isMounted = true;

//   if (isMounted) {
//     setEventsData(events)
//   }

//   return () => {
//       isMounted = false;
//   };
// }, [dispatch, events, eventsData]);

  const handleCategory = () => {};

  const handleItems = () => {};

  const handleSort = (e) => {
    // const filterValue = e.target.value;

    // if (filterValue === "high")
    //   eventsData.sort((a, b) => a.price - b.price);
  
    // if (filterValue === "low")
    //   eventsData.sort((a, b) => b.price - a.price);

    // eventsData()
  };

  return (
    <>
      <CommonSection title={"My events"} 
                    subtitle={"Here you can find your own events"}/>

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <input type="text" className="newsletter" placeholder="Search" />
                </div>

                <div className="filter__right">
                  <button
                    className="bid__btn d-flex align-items-center gap-1" style={{background: 'transparent'}}
                    onClick={() => navigate('/dashboard/create-event')}
                  >
                    <i className="ri-ball-pen-line"></i>Create
                  </button>
                </div>
              </div>
            </Col>

            {user.userEvents?.map((item) => (
              <Col xxl="3" xl="4" lg="4" md="6" sm="7"  xs="8"  className="mb-4" key={item._id}>
                <DashboardEventCard item={item} isCreate={false} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

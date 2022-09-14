import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from "reactstrap";

import { Calendar, CommonSection } from "../../components";

import {
  getUserScheduleProcess,
} from '../../redux/actions';

export function Schedule () {
  const dispatch = useDispatch();

  const {
    user,
  } = useSelector((state) => state.user);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) dispatch(getUserScheduleProcess())

    return () => {
        isMounted = false;
    };
  }, [dispatch]);

  return (
    <>
      <CommonSection title={"Discover your upcoming events"} 
                    subtitle={"Enjoy your events!"}/>

      <section>
        <Container>
          <Row className="justify-content-center">
            {user.userSchedule && user.userSchedule.length ?
              <Calendar
                month={7}
                year={2022}
                preloadedEvents={user.userSchedule}
              />
              : <Calendar
                month={7}
                year={2022}
                preloadedEvents={[]}
              />
            }
          </Row>
        </Container>
      </section>
    </>
  );
};
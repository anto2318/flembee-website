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
      <CommonSection title={"Track your projects"} 
                    subtitle={"Know the dates of your meetings and deliveries of your projects."}/>

      <section>
        <Container>
          <Row className="justify-content-center">
            {user.userSchedule && user.userSchedule.length ?
              <Calendar
                month={new Date().getMonth()}
                year={new Date().getFullYear()}
                preloadedEvents={user.userSchedule}
              />
              : <Calendar
                month={new Date().getMonth()}
                year={new Date().getFullYear()}
                preloadedEvents={[]}
              />
            }
          </Row>
        </Container>
      </section>
    </>
  );
};
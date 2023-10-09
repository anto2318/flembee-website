import React from "react";
import { useSelector } from 'react-redux';
import { Container, Row } from "reactstrap";

import { Calendar, CommonSection } from "../../components";

export function Schedule () {
  const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <>
      <CommonSection title={messages.scheduleTitle} 
                    subtitle={messages.scheduleSubtitle} />

      <section>
        <Container>
          <Row className="justify-content-center">
            <Calendar
              month={new Date().getMonth()}
              year={new Date().getFullYear()}
              preloadedEvents={[]}
            />
          </Row>
        </Container>
      </section>
    </>
  );
};
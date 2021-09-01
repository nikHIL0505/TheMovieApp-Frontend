import React from "react";
import Cards from "./cards";
import { Row, Col } from "react-bootstrap";

const MovieList = () => {
  let arr = [
    { name: "Bahubali", date: "Sept 24, 2019" },
    { name: "Prem Ratan Dhan Payo", date: "Sept 24, 2019" },
  ];
  return (
    <>
      <Row>
        {arr.map((i) => (
          <Col>
            <Cards entries={i} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MovieList;

import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Card, Row, Col } from "react-bootstrap";
import pic1 from "../war.jfif";
import pic2 from "../bahubali.jfif";
const MovieCards = ({ entries }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <Card style={{ width: "200px", border: "0px" }}>
      <Card.Img variant="top" style={{ height: "275px" }} src={pic1} />
      <Card.Body
        style={{
          padding: "6px 6px 16px 16px",
          backgroundColor: "black",
          minHeight: "60px",
        }}
      >
        <div className="d-flex">
          <div style={{ flex: "6" }}>
            <h5 style={{ color: "white", fontWeight: "600px" }}>
              {entries.name}
            </h5>
          </div>
          <div style={{ flex: "1" }}>
            {isFavourite ? (
              <AiFillHeart
                title="Remove From Favourite"
                style={{ color: "red", cursor: "pointer", fontSize: "18px" }}
                onClick={(e) => setIsFavourite(false)}
              />
            ) : (
              <AiOutlineHeart
                title="Add To Favourite"
                style={{ color: "red", cursor: "pointer", fontSize: "18px" }}
                onClick={(e) => setIsFavourite(true)}
              />
            )}
          </div>
        </div>
        <p style={{ color: "#e6e6e6", fontSize: "14px" }}>{entries.date}</p>
      </Card.Body>
    </Card>
  );
};

export default MovieCards;

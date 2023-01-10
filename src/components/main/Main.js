import React from "react";
import "./main.css";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
export default function Main({ main, mainCard }) {
  return (
    <div className="card">
      {main.map((m) => {
        const title = mainCard.find((el) => {
          //return m.sys.id === el.fields.soupname.sys.id;
          return m.sys.id === el.fields.image.sys.id;
        });
        console.log(main);
        return (
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={m.fields.file.url}
              className="cardImage"
            />
            <Card.Body>
              <Card.Title>{title?.fields.title}</Card.Title>
              <Card.Text className="description">
                {m.fields.description}
              </Card.Text>
              <Nav className="nav gap-3 ">
                {/* <NavLink to="/ingredients">Ingredients</NavLink> */}
                {/* <Link to={`instructions/${m.sys.id}`}> Instructions </Link> */}
                <Link to={`/instructions/${title.sys.id}/${m.fields.title}`}>
                  {" "}
                  Instructions
                </Link>
              </Nav>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

import React from "react";
import "./main.css";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
// import { StarRating } from "./StarRating";
import List from "./List";
import { useNavigate } from "react-router-dom";

export default function Main({ main, mainCard }) {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      
      <div className="main">
        <div className="mainsearch">
        <svg
        onClick={() => {
          navigate(-1);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-arrow-left-circle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        />
      </svg>
      <h2 className="h2">Main Course</h2>
        <div>
          <TextField
             className="search"
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            label="Search"
          />
        </div>
        </div>
        <List
          input={inputText}
          main={
            <div className="cardmain">
              {main.map((m) => {
                const title = mainCard.find((el) => {
                  return m.sys.id === el.fields.image.sys.id;
                });
                return (
                  <Card style={{ width: "18rem" }}>
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
                        <Link
                          to={`/instructions/${m.sys.id}/${title.sys.id}/${m.fields.title}`}
                        >
                          Go to recipe
                        </Link>
                      </Nav>
                      {/* <StarRating /> */}
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          }
        />
      </div>
    </>
  );
}

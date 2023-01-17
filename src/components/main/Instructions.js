import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./main.css";
import Accordion from "react-bootstrap/Accordion";

export default function Instructions() {
  const { assetid,id } = useParams();
  const navigate = useNavigate();
  const [instruction, setInstruction] = useState([]);
  const[title,setTitle] = useState([]);
  const[description,setDescription] = useState([]);
  const [imginstr, setImgInstr] = useState([]);
 
  const url = `https://preview.contentful.com/spaces/sikvn7be5tur/environments/master/entries/${id}?access_token=UxgjzKnC0DFARUAoog7SUFZ0-QaCqRKObuNDWJ3LYUU&content_type=recipe`;
  const asseturl = `https://preview.contentful.com/spaces/sikvn7be5tur/environments/master/assets/${assetid}?access_token=UxgjzKnC0DFARUAoog7SUFZ0-QaCqRKObuNDWJ3LYUU`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setInstruction(response.data);
        setTitle(response.data.fields.title.toUpperCase())
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(asseturl)
      .then((response) => {
        setImgInstr(response.data.fields.file.url);
        setDescription(response.data.fields.description)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
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
      </svg><br/>
      <div className="divimg">
      <img className="imginstr" src = {imginstr} />
      <div className="prep">
      <h1>{title}</h1> <br/>
      <h4>{description}</h4>
      </div>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>INGREDIENTS</h5>
          </Accordion.Header>
          <Accordion.Body>
            {instruction.fields && (
              <>
                {instruction.fields.ingredients.content.map((item) => {
                  if (item.nodeType === "heading-6") {
                    return <h4> {item.content[0].value} </h4>;
                  }
                  if (item.nodeType === "unordered-list") {
                    return (
                      <ul>
                        {item.content.map((listItem) => {
                          return (
                            <li> {listItem.content[0].content[0].value}</li>
                          );
                        })}
                      </ul>
                    );
                  }
                  if (item.nodeType === "paragraph") {
                    return <p> {item.content[0].value} </p>;
                  }
                })}
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>INSTRUCTIONS</h5>
          </Accordion.Header>
          <Accordion.Body>
            {instruction.fields && (
              <>
                {instruction.fields.method.content.map((item) => {
                  if (item.nodeType === "paragraph") {
                    return <p> {item.content[0].value} </p>;
                  }

                  if (item.nodeType === "unordered-list") {
                    return (
                      <ul>
                        {item.content.map((listItem) => {
                          return (
                            <h4> {listItem.content[0].content[0].value}</h4>
                          );
                        })}
                      </ul>
                    );
                  }
                  if (item.nodeType === "ordered-list") {
                    return (
                      <ul>
                        {item.content.map((listItem) => {
                          return (
                            <li> {listItem.content[0].content[0].value}</li>
                          );
                        })}
                      </ul>
                    );
                  }
                })}
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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
    </div>
  );
}

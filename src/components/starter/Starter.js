import React, { useState, useEffect } from "react";
import "./starter.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Details from "./Details";
import MyMap from "./MyMap";
//import Order from './Order';
import Order2 from "./Order2";

export default function Starter() {
  const [elements, setElements] = useState([]);
  const [pics, setPics] = useState([]);
  //const [richText,setRichText] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://preview.contentful.com/spaces/1144be5o46gz/environments/master/entries?access_token=lJh_BsIZlQVGVqbIkRHv0JKL0GRmezNmJa6vU8BluUU&content_type=starter&access_token=BaSDT1ePxfOqLe7UM-VtGEuPVC-PNJKaqk3qGwQFQls"
      )
      .then((response) => {
        //console.log(response.data.includes.Asset);
        setElements(response.data.items);
        setPics(response.data.includes.Asset);
        //console.log(elements);
        //console.log(response.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row cards d-flex justify-content-center gap-5 m-5 flex-wrap">
      <h1 className="text-center">Starters</h1>

      {pics.map((pic) => {
        const element = elements.find((el) => {
          return pic.sys.id === el.fields.soupname.sys.id;
        });

        return (
          <div className="col">
            <Card className="card shadow">
              <Card.Img variant="top" src={pic.fields.file.url} height={200} />
              <Card.Body className="d-flex flex-column ">
                <div>
                  <Card.Title>{element?.fields.title}</Card.Title>
                  <Card.Text className="d-flex flex-column align-content-between ">
                    {element?.fields.description}
                    {element.fields.richtext.content.map((el) => {
                      if (el.nodeType === "paragraph") {
                        return (
                          <p className="text-danger">{el.content[0].value}</p>
                        );
                      }
                    })}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}

      <div className="row d-flex justify-content-center gap-5 m-5 flex-wrap border-top border-bottom ">
        <div className="col ">
          <Details />
        </div>

        <div className="col ">
          <MyMap />
        </div>
      </div>

      <div>
        <Order2 />
      </div>
    </div>
  );
}

//<div>
//      <img src={pic.fields.file.url} />
//<h1>{element?.fields.title}</h1>
//<p>{element?.fields.description}</p>
//</div>

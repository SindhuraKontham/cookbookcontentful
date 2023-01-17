import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import client from "../../client";
import { useNavigate } from "react-router-dom";

export default function Salad({ setLoading, isLoading }) {
  const [salads, setSalads] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  const [saladRecipes, setSaladRecipes] = useState([]);
  const [saladImages, setSaladImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    // axios
    //   .get(
    //     "https://preview.contentful.com/spaces/1144be5o46gz/environments/master/entries?access_token=lJh_BsIZlQVGVqbIkRHv0JKL0GRmezNmJa6vU8BluUU&content_type=salad"
    //   )
    //   .then((response) => {
    //     setSalads(response.data.items);
    //     setSaladImages(response.data.includes.Asset);
    //   });
    client
      .getEntries({
        content_type: "recipe",
      })
      .then((response) => {
        console.log(response.items);

        setSalads(response.items);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <h1 className="text-uppercase text-center mt-2">Salads</h1>
      {isLoading ? (
        // <div className="spinner-border text-center" role="status">
        //   <span className="sr-only"></span>
        //   {console.log("loading")}
        // </div>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-wrap  gap-3 m-2 ">
          {salads.map((salad) => {
            return (
              <>
                <Card
                  key={salad.sys.id}
                  style={{ width: "25rem", padding: "0rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={salad.fields.image.fields.file.url}
                    height={300}
                  />
                  <Card.Body>
                    <Card.Title>{salad.fields.name}</Card.Title>
                    {/* <Card.Text>{salad.fields.description}</Card.Text> */}
                    <Button
                      onClick={() => {
                        navigate(`${salad.sys.id}`);
                      }}
                      variant="primary"
                    >
                      Go to Recipe
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

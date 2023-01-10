import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import client from "../../client";
import { useNavigate } from "react-router-dom";

export default function Salad() {
  const [salads, setSalads] = useState([]);
  const [saladRecipes, setSaladRecipes] = useState([]);
  const [saladImages, setSaladImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
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
      })
      .catch(console.error);
  }, []);

  return (
    <div className="d-flex p-2 justify-content-center flex-wrap  gap-5 m-3 ">
      {salads.map((salad) => {
        return (
          <>
            <Card key={salad.sys.id} style={{ width: "20rem" }}>
              <Card.Img
                className="rounded"
                variant="top"
                src={salad.fields.image.fields.file.url}
                height={300}
              />
              <Card.Body>
                <Card.Title>{salad.fields.name}</Card.Title>
                <Card.Text>{salad.fields.description}</Card.Text>
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
      {/* {salads.map((salad) => {
          const image = saladImages.find((saladImage) => {
            return salad.fields.soupname.sys.id === saladImage.sys.id;
          });

          return (
            <Card key={salad.sys.id} style={{ width: "27rem" }}>
              <Card.Img
                className="rounded"
                variant="top"
                src={image.fields.file.url}
                height={300}
              />
              <Card.Body>
                <Card.Title>{salad.fields.title}</Card.Title>
                <Card.Text>{salad.fields.description}</Card.Text>
                <Button variant="primary">Go to Recipe</Button>
              </Card.Body>
            </Card>
          );
        })} */}
    </div>
  );
}

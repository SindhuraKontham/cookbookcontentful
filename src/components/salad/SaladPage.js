import React from "react";
import client from "../../client";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Salad from "./Salad";
import "./salad.css";

function SaladPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saladRecipe, setSaladRecipe] = useState({});
  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setSaladRecipe(response);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      {saladRecipe.fields && (
        <div className="container">
          <h1 className="text-uppercase text-center mt-3">
            {" "}
            {saladRecipe.fields.name}
          </h1>

          <div className="row mt-5">
            <div className="col-lg-6  ">
              <div className="box">
                <img
                  src={saladRecipe.fields.image.fields.file.url}
                  alt=""
                  className=" rounded border border-secondary salad-image"
                />
              </div>
            </div>
            <div className=" col-lg-6  m-auto">
              <p className="mt-3 fst-italic fw-bold">
                {saladRecipe.fields.description}
              </p>
            </div>
          </div>
          <hr className="mt-3" />
          <div className="row mt-lg-3 mt">
            <div className="col-lg-6">
              {saladRecipe.fields.ingredients.content.map((recipe) => {
                console.log(recipe);
                if (recipe.nodeType === "unordered-list") {
                  return (
                    <>
                      <h3>Ingredients</h3>
                      <ul className="list-group">
                        {recipe.content.map((listItem) => {
                          return (
                            <li className="list-group-item">
                              {" "}
                              {listItem.content[0].content[0].value}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                }
              })}
            </div>
            <div className="col-lg-6">
              {saladRecipe.fields.instructions.content.map((recipe) => {
                console.log(recipe);
                if (recipe.nodeType === "ordered-list") {
                  return (
                    <>
                      <h3>Instructions</h3>
                      <ol>
                        {recipe.content.map((listItem) => {
                          return (
                            <li> {listItem.content[0].content[0].value}</li>
                          );
                        })}
                      </ol>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SaladPage;

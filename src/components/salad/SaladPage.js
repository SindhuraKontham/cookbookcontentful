import React from "react";
import client from "../../client";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./salad.css";

function SaladPage({ isLoading, setLoading }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saladRecipe, setSaladRecipe] = useState({});
  useEffect(() => {
    setLoading(true);
    client
      .getEntry(id)
      .then((response) => {
        setSaladRecipe(response);
        setLoading(false);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="wrapper">
      <button
        className="mt-2  btn btn-link fs-0 text-dark"
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}
      <div className="container parent ">
        <div className="row">
          {saladRecipe.fields && (
            <div className="col d-flex flex-column ">
              <h1 className="text-uppercase text-center mt-3">
                {saladRecipe.fields.name}
              </h1>
              <img
                src={saladRecipe.fields.image.fields.file.url}
                alt=""
                className=" img-fluid rounded salad-image border border-secondary "
              />
              <p className="mt-2 fst-italic fw-bold">
                {saladRecipe.fields.description}
              </p>
              {saladRecipe.fields.ingredients.content.map((recipe) => {
                console.log(recipe);
                if (recipe.nodeType === "unordered-list") {
                  return (
                    <>
                      <h3>Ingredients</h3>
                      <ul className=" list">
                        {recipe.content.map((listItem) => {
                          return (
                            <li className="list-item">
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
          )}
        </div>
      </div>
    </div>
  );
}

export default SaladPage;

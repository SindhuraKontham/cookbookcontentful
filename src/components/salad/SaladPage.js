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
    <>
      <i className="fa-light fa-arrow-left"></i>
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
          {/* {saladRecipe.fields.ingredients.content.map((recipe) => {
            console.log(recipe);
            if (recipe.nodeType === "unordered-list") {
              return (
                <>
                  <h3>Ingredients</h3>
                  <ul className="list">
                    {recipe.content.map((listItem) => {
                      return <li> {listItem.content[0].content[0].value}</li>;
                    })}
                  </ul>
                </>
              );
            }
          })} */}
        </div>
        {/* {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}
      {saladRecipe.fields && (
        <div className="container">
          <button
            className="mt-2 ms-2 btn btn-link fs-0"
            onClick={() => {
              navigate(-1);
            }}
          >
            back
          </button>

          <h1 className="text-uppercase text-center mt-3">
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
          <div className="row mt-lg-2 pb-5">
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
            <div className="col-lg-6 ">
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
      )} */}
      </div>
    </>
  );
}

export default SaladPage;

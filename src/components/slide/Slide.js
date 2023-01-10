import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import "./slide.css";

//1144be5o46gz
//lJh_BsIZlQVGVqbIkRHv0JKL0GRmezNmJa6vU8BluUU

function Slide() {
  const [titles, setTitles] = useState([]);
  const [images, setImages] = useState([]);


  useEffect(() => {
    axios
      .get(
        "https://preview.contentful.com/spaces/1144be5o46gz/environments/master/entries?access_token=lJh_BsIZlQVGVqbIkRHv0JKL0GRmezNmJa6vU8BluUU&content_type=slide&access_token=BaSDT1ePxfOqLe7UM-VtGEuPVC-PNJKaqk3qGwQFQls"
      )
      //.get('https://cdn.contentful.com/spaces/1144be5o46gz/environments/master/entries?access_token=BaSDT1ePxfOqLe7UM-VtGEuPVC-PNJKaqk3qGwQFQls')
      ///spaces/1144be5o46gz/environments/master/entries?access_token=lJh_BsIZlQVGVqbIkRHv0JKL0GRmezNmJa6vU8BluUU&content_type=slide
      .then((response) => {
        setTitles(response.data.items);
        setImages(response.data.includes.Asset);
        console.log(response.data.includes.Asset);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

<div>
<Carousel>
    

          {images.map((img,index) => { 
          console.log(img.sys.id)
          const title = titles.find((el) => {
            return img.sys.id === el.fields.dish.sys.id
          })

            return <Carousel.Item>
               <img
            className="d-block carousel-images"
            src={img.fields.file.url}
            alt="First slide"
            />
            <Carousel.Caption>
              <div className='carousel-text text-dark'>
              <h3>{title?.fields.title}</h3>
              <p>{title?.fields.description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          })}
           
           
        </Carousel>
          </div>

  );
}

export default Slide;

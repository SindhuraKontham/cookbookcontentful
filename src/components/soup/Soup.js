import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './soup.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Soup() {
  const[images,setImages] = useState([]);
  const[data,setData] = useState([]);

  useEffect(() =>{
    axios.get('https://preview.contentful.com/spaces/1144be5o46gz/environments/master/entries?access_token=lJh_BsIZlQVGVqbIkRHv0JKL0GRmezNmJa6vU8BluUU&content_type=soup&access_token=BaSDT1ePxfOqLe7UM-VtGEuPVC-PNJKaqk3qGwQFQls')
    .then(
      (response)=>
      {setImages(response.data.includes.Asset)
        setData(response.data.items)
      console.log(response.data.inludes.Asset)}
    )

    .catch((error) => {console.log(error)})
  }, [])
  return (
    <div>
    <Carousel>
        
    
              {images.map((item,index) => { 
              //console.log(img.sys.id)
              const title = data.find((el) => {
                return item.sys.id === el.fields.soupname.sys.id
              })
    
                return <Carousel.Item>
                   <img
                className="d-block carousel-images"
                src={item.fields.file.url}
                alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{title?.fields.title}</h3>
                  <p>{title?.fields.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
              })}
               
               
            </Carousel>
              </div>
      );
}


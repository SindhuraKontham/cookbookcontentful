import axios from "axios";
import { useEffect, useState } from "react";

export default function Order2() {
  const [elements, setElements] = useState([]);
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(0);
  const [price, setPrice] = useState();

  const numberChanged = (e) => {
    //console.log(e.target.value)
    setResult(e.target.value * 3);
  };
  const orderPlaced = () => {
    alert("Order placed.Thank you!");
  };

  useEffect(() => {
    axios
      .get(
        "https://preview.contentful.com/spaces/1144be5o46gz/environments/master/entries?access_token=lJh_BsIZlQVGVqbIkRHv0JKL0GRmezNmJa6vU8BluUU&content_type=starter&access_token=BaSDT1ePxfOqLe7UM-VtGEuPVC-PNJKaqk3qGwQFQls"
      )
      .then((response) => {
        //console.log(response)
        setElements(response.data.items);
        setItems(response.data.includes.Asset);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {items.map((item) => {
        const element = elements.find((el) => {
          return item.sys.id === el.fields.soupname.sys.id;
        });

        return (
          <div>
            <h4>{element?.fields.title}</h4>
            <span className="input-group-text">
              Price per order:
              {element.fields.title === "Momo" ? 3 : null}
              {element.fields.title === "Empanada" ? 5 : null}
              {element.fields.title === "Bruschetta" ? 7 : null}
              {element.fields.title === "Sushi" ? 10 : null}
            </span>
            <input type="number" min="0" onChange={numberChanged} />
            <span className="input-group-text">Total Price: {result} $</span>
            <button className="btn btn-dark" onClick={orderPlaced}>
              Order {element?.fields.title}
            </button>
            <p>
              Estimated delivery time : {Math.floor(Math.random() * 2)}h
              {Math.floor(Math.random() * 59)}min.
            </p>
          </div>
        );
      })}
    </div>
  );
}

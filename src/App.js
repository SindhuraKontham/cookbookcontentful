import Header from "./components/navbar/Header";
import { Routes, Route } from "react-router-dom";
import Soup from "./components/soup/Soup";
import Salad from "./components/salad/Salad";
import Starter from "./components/starter/Starter";
import Main from "./components/main/Main";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Instructions from "./components/main/Instructions";
import { useState, useEffect } from "react";
import axios from "axios";
import SaladPage from "./components/salad/SaladPage";
import "./app.css";

function App() {
  const [mainCard, setMainCard] = useState([]);
  const [main, setMain] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://preview.contentful.com/spaces/sikvn7be5tur/environments/master/entries?access_token=UxgjzKnC0DFARUAoog7SUFZ0-QaCqRKObuNDWJ3LYUU&content_type=recipe"
      )
      .then((response) => {
        setMainCard(response.data.items);
        setMain(response.data.includes.Asset);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soup" element={<Soup />} />
        <Route
          path="/salad"
          element={<Salad setLoading={setLoading} isLoading={isLoading} />}
        />
        <Route path="/starter" element={<Starter />} />
        <Route
          path="/main"
          element={<Main main={main} mainCard={mainCard} />}
        />
        <Route path="/instructions/:id/:name" element={<Instructions />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/salad/:id"
          element={<SaladPage setLoading={setLoading} isLoading={isLoading} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

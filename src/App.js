import Header from "./components/navbar/Header";
import {Routes,Route} from 'react-router-dom';
import Soup from './components/soup/Soup';
import Salad from './components/salad/Salad';
import Starter from './components/starter/Starter';
import Main from './components/main/Main';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      
 <Header />
 <Routes>
   <Route path="/"  element={<Home />} />
    <Route path='/soup' element={<Soup />} />
    <Route path='/salad' element={<Salad />} />
    <Route path='/starter' element={<Starter />} />
    <Route path='/main' element={<Main />} />
    </Routes>
  <Footer />
    </div>
  );
}

export default App;

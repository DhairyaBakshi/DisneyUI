import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Movies from './components/Movies';
import Detailed from './components/Detailed';
import Iron from './components/iron';
import Inc from './components/Inc';
import Originals from './components/Originals';
import Series from './components/Series';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "Movies" element={<Movies/>}/>
          <Route path = "Login" element={<Login />}/>
          <Route path = "detail" element={<Detail />}/>
          <Route path ="Home" element={<Home/>}/>
          <Route path ="/" element={<Login/>}/>
          <Route path = "detailed" element={<Detailed />}/>
          <Route path = "Iron" element={<Iron />}/>
          <Route path = "Inc" element={<Inc />}/>
          <Route path = "Originals" element={<Originals />}/>
          <Route path = "Series" element={<Series />}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

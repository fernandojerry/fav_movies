import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Movies from './pages/Movies';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from "./pages/Search"
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div>
          <Header logo="Fav Movies" />
        </div>
        </div>
          <Routes>
          <Route path='/home' exact
           Component={Home} />
          <Route path='/movies' Component={Movies}/>
          <Route path='/blog' Component={Blog} />
          <Route path='/search' Component={Search} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}
export default App;
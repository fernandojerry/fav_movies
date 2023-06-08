import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Movies from './pages/Movies';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from "./pages/Search"
function App() {
  return (
    <HashRouter>
        <div className="App">
          <Header logo="Fav Movies" />
        </div>
        <Routes>
          <Route path='/'
           element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
    </HashRouter>
  );
}
export default App;
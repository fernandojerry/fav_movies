import React from 'react'
import Banner from '../components/Banner'
import "../Assets/Home.css"
import SearchPNG from "../Assets/images/4wlebrac.png"
import Hero from "../Assets/images/screenshot11.png"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>
      <div className="home-intro">
        <h1>Fav Movies</h1>
        <p>Here you can search your favorite movies and look up for trending movies of different categories ranging from Action Movies, Netflix Originals, comedies, Documentries, etc.</p>
      </div>
      <div className='banner'><Banner /></div>
      <div className=' search-section'>
        <div className='search-content'>

          <Link className="hero-btn1" to="/movies">Exciting Movies</Link>
            
            <h1>
              The Movie App For Your <br /> <span>
                Favorite Movies
              </span>
            </h1>
            <p>
              Look out for the top rated 20 Movies from our list of Categories. 
            </p>
            <Link className="hero-btn2" to="/movies">See Movies</Link>
          </div>
          <div className='search-image'>
            <img src={Hero} alt="Hero" className='hero'/>
          </div>
          
      </div>
      <div className='search-section flex-wrap'>
          <div    className='search-image'>
            
            <img src={SearchPNG} alt="Search Box" />
          </div>
          <div className='search-content'>
            <h1>
              Search Your Favorite Movies
            </h1>
            <p>
              You can now search your favorite movies both old and new with our opimised search engine. There is no limitaion to Movies you can search.
            </p>
            <Link className='hero-btn1' to="/search">Search favorite Movies</Link>
            
          </div>
          
        </div>
        <div className="search-section">
          <div className='search-content'>
            <h1>
              About
            </h1>
            <p>
              I am inspired to develop this project because of my interest in Frontend development. I used this project to improve my skill on advanced Css, like Css grid and FlexBox and most importantly i was able to develope my first React App. This is a portfolio project for Holberton School.
            </p>
          </div>
          <div className='search-image'>
            <img src="https://th.bing.com/th/id/OIP.cBcWa96x3sHldv2jKlpxNgHaFa?pid=ImgDet&rs=1" alt="Hero" className='hero'/>
          </div>
        </div>
        <a href="https://github.com/fernandojerry/fav_movies" className="hero-btn2" target='_blank' rel='noreferrer'>Source Code</a>
        
    </div>
  )
}

export default Home

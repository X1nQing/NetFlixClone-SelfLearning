import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/footer'

const Home = () => {
  return (
    <div children="Home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            Experience the best movies and TV shows from X1nQing!
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards"> 
        <TitleCards title={"BlockBuster Movies"} category={"upcoming"}/>
        <TitleCards title={"Top UnRated Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on NetFlix - X1nQing"} category={"popular"}/>
        <TitleCards title={"Low Pics For You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home

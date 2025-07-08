import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://github.com/X1nQing" target="_blank" rel="noopener noreferrer">
          <img src={youtube_icon} alt="YouTube" />
        </a>
        <a href="https://github.com/X1nQing" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://github.com/X1nQing" target="_blank" rel="noopener noreferrer">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://github.com/X1nQing" target="_blank" rel="noopener noreferrer">
          <img src={facebook_icon} alt="Facebook" />
        </a>
      </div>
      <ul>
        <li>Audio Descrption</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Hey Its Me</li>
        <li>X1nQing</li>
        <li>BTW this just for my learning path!</li>
        <li>Contact Me!</li>
      </ul>
      <div className="copyright-text">© 2025 X1nQing. All rights reserved.</div>
    </div>
  )
}

export default Footer

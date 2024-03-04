// Write your JS code here

import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-body-container">
      <h1 className="home-main-heading-1">Clothes That Get YOU Noticed</h1>
      <div className="home-img-content-card">
        <img
          className="clothes-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <div className="home-description-card">
          <h1 className="home-main-heading-2">Clothes That Get YOU Noticed</h1>
          <p className="home-description">
            Fashion is part of the daily air, Fashion is a term used
            interchangeably to describe the creation of clothing, footwear,
            accessories, cosmetics, and jewellery of different cultural
            aesthetics and their mix and match into outfits that depict
            distinctive ways of dressing (styles and trends) as signifiers of
            social status, self-expression, and group belonging. As a
            multifaceted term, fashion describes an industry, styles,
            aesthetics, and trends.
          </p>
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Home

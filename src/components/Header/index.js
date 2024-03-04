// Write your JS code here

import './index.css'

const Header = () => (
  <>
    <div className="nav-container-1">
      <div className="nav-logo-icon-card">
        <img
          className="nav-website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="nav-icons"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </div>
      <div className="nav-icons-card">
        <img
          className="nav-icons"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
        <img
          className="nav-icons"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
        <img
          className="nav-icons"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </div>
    </div>
    <div className="nav-container-2">
      <div className="nav-logo-icon-card">
        <img
          className="nav-website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="nav-icons-card">
          <ul>
            <li className="nav-items">Home</li>
            <li className="nav-items">Products</li>
            <li className="nav-items">Cart</li>
          </ul>
          <button type="button" className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  </>
)

export default Header

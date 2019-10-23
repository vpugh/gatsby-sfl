import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: '#270533',
      color: '#fff',
      padding: '20px 30px',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <h1 style={{ margin: 0, fontSize: '1.1rem' }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <div className="user-container">
      Sample User
      <div className="user-avatar" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

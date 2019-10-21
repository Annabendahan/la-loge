import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#EFEFE1`,
      fontFamily: `Roboto`,
      padding: `.8rem 1rem`
    }}
  >
  <p style={{ margin: 0, textAlign: `right` }}>
      twitter
  </p>
    <div
      style={{

        padding: `0.45rem 0rem`,
        borderTop: `1px solid black`,
        borderBottom: `1px solid black`,
        background: `#EFEFE1`
      }}
    >
      <h1 style={{ margin:0, marginTop: `-15px`, textAlign: `right` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `1rem`,


          }}
        >
          La Loge
        </Link>
      </h1>
      <p style={{ margin: 0, textAlign: `right` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `1rem`,

          }}
        >
          Studio photo
        </Link>
      </p>
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

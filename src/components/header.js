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
  <p className="soc">
      <div className="soc1">
        <svg width="17" height="14" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1.05806C10.5909 1.2375 10.1551 1.35644 9.70062 1.41419C10.1681 1.13506 10.5249 0.696437 10.6927 0.16775C10.2568 0.427625 9.77556 0.611188 9.26269 0.713625C8.84881 0.272938 8.25894 0 7.61544 0C6.36694 0 5.36181 1.01338 5.36181 2.25569C5.36181 2.43444 5.37694 2.60631 5.41406 2.76994C3.53925 2.6785 1.88031 1.77994 0.765875 0.411125C0.571312 0.748688 0.457188 1.13506 0.457188 1.551C0.457188 2.332 0.859375 3.02431 1.45887 3.42512C1.09656 3.41825 0.741125 3.31306 0.44 3.14738C0.44 3.15425 0.44 3.16319 0.44 3.17212C0.44 4.268 1.22169 5.17825 2.24675 5.38794C2.06319 5.43812 1.86312 5.46219 1.6555 5.46219C1.51112 5.46219 1.36537 5.45394 1.22856 5.42369C1.52075 6.31675 2.34988 6.97331 3.33575 6.99462C2.5685 7.59481 1.59431 7.95644 0.539688 7.95644C0.35475 7.95644 0.177375 7.94819 0 7.9255C0.998937 8.56969 2.18281 8.9375 3.4595 8.9375C7.60925 8.9375 9.878 5.5 9.878 2.52037C9.878 2.42069 9.87456 2.32444 9.86975 2.22888C10.3173 1.91125 10.6934 1.51456 11 1.05806Z" fill="black"/>
        </svg>

      </div>
      <div className="soc2">
        <svg width="9" height="18" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.81171 0.00201595L3.61244 0C2.2651 0 1.39439 0.935905 1.39439 2.38447V3.48386H0.188574C0.0843773 3.48386 0 3.57236 0 3.68153V5.27443C0 5.3836 0.0844735 5.472 0.188574 5.472H1.39439V9.4914C1.39439 9.60056 1.47877 9.68896 1.58296 9.68896H3.15621C3.26041 9.68896 3.34478 9.60046 3.34478 9.4914V5.472H4.75466C4.85886 5.472 4.94324 5.3836 4.94324 5.27443L4.94381 3.68153C4.94381 3.62911 4.9239 3.57892 4.88859 3.54182C4.85328 3.50473 4.80517 3.48386 4.75514 3.48386H3.34478V2.55189C3.34478 2.10395 3.44667 1.87655 4.00364 1.87655L4.81152 1.87625C4.91562 1.87625 5 1.78774 5 1.67868V0.199579C5 0.090617 4.91572 0.00221755 4.81171 0.00201595Z" fill="black"/>
        </svg>

      </div>
      <div className="soc3">
        <svg width="13" height="13" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.82813 0H1.17188C0.525757 0 0 0.525757 0 1.17188V6.82813C0 7.47424 0.525757 8 1.17188 8H6.82813C7.47424 8 8 7.47424 8 6.82813V1.17188C8 0.525757 7.47424 0 6.82813 0ZM4.01563 6.09375C2.85248 6.09375 1.90625 5.14752 1.90625 3.98438C1.90625 2.82123 2.85248 1.875 4.01563 1.875C5.17877 1.875 6.125 2.82123 6.125 3.98438C6.125 5.14752 5.17877 6.09375 4.01563 6.09375ZM6.35938 2.34375C5.97168 2.34375 5.65625 2.02832 5.65625 1.64063C5.65625 1.25293 5.97168 0.9375 6.35938 0.9375C6.74707 0.9375 7.0625 1.25293 7.0625 1.64063C7.0625 2.02832 6.74707 2.34375 6.35938 2.34375Z" fill="black"/>
        <path d="M6.35938 1.40625C6.23004 1.40625 6.125 1.51129 6.125 1.64062C6.125 1.76996 6.23004 1.875 6.35938 1.875C6.48871 1.875 6.59375 1.76996 6.59375 1.64062C6.59375 1.51129 6.48871 1.40625 6.35938 1.40625Z" fill="black"/>
        <path d="M4.01563 2.34375C3.11108 2.34375 2.375 3.07983 2.375 3.98438C2.375 4.88892 3.11108 5.625 4.01563 5.625C4.92017 5.625 5.65625 4.88892 5.65625 3.98438C5.65625 3.07983 4.92017 2.34375 4.01563 2.34375Z" fill="black"/>
        </svg>

      </div>
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

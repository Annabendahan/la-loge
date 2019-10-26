import React from "react"
import { Link } from "gatsby"
import "./contact.css"
import pic7 from "../images/CONTACT1.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <div className="contact-cont">
    <div className="contact">
      <div className="contact-left">
        <img  src={pic7} className="fatTitle"  alt="fireSpot" />
      </div>

      <div className="contact-infos">
        <p> La Loge </p>
        <p> 0987654321 </p>
        <p> hello@dkhezh.com </p>
      </div>
    </div>
  </div>

)

export default Contact

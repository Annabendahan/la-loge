import React from "react"
import { Link } from "gatsby"
import "../components/index.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pic1 from "../images/photo-1413840608845-6bd3a8023f2e 1.png"
import pic2 from "../images/PROJECTS.png"
import pic3 from "../images/good11.png"
import pic4 from "../images/jp-valery-G2GFmGWCbKk-unsplash 2.png"
import pic5 from "../images/BERLIN.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="homeDiv">
      <div className="homePic">
        <img  src={pic1}  alt="fireSpot" />
      </div>
      <div className="text">
        <h1 className="title-1"> LA LOGE </h1>
        <h3> Bonjour </h3>
        <p> La loge is a french photo studio,
            created to put together argentic photos through projects.
        </p>
      </div>
    </div>

    <div className="secondDiv">
     <img  src={pic2} className="fatTitle"  alt="fireSpot" />
     <img  src={pic3} className="fatPic"  alt="fireSpot" />

     <div className="textBox">
      <div className="textBox-left">
        <h3> lorem ipsum </h3>
        <p> La loge is a french photo studio,
            created to put together argentic photos through projects.
        </p>
      </div>
      <div className="textBox-right">
        <p> La loge is a french photo studio,
            created to put together argentic photos through projects.
        </p>
      </div>
     </div>
     </div>

     <div className="thirdDiv">
        <img  src={pic4} className="fatPic"  alt="fireSpot" />
        <div className="right-div">
          <div className="rl-div">
          <h3> lorem ipsum </h3>
            <p> La loge is a french photo studio,
                created to put together argentic photos through projects.
            </p>
          </div>
          <div className="rr-div">
           <img  src={pic5} className=""  alt="fireSpot" />
          </div>
        </div>
     </div>

     <div className="fourthDiv">
     </div>





  </Layout>
)

export default IndexPage

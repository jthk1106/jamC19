import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import animated from "animate.css"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import C19 from "../components/c19stats"

const date = moment().format('MMMM Do YYYY')

const IndexPage = () => (
  // <Layout>
  <div>
    <SEO title="Home" />
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="display-4 text-center title-left glow">covid19</h1>
                <h1 className="display-4 text-center title-right glow">코로나19</h1>
            </div>
            <p className="lead title-msg">Statistics monitor on covid19 with data sourced from Worldometer.</p>
            <p>(Data is aggregated and continuously updated so metrics will refresh and appear most complete towards end of day)</p>
        </div>
    </div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="date">
              <div className="date-text">{date}</div>
              <div className="date-hr"></div>
            </div>
        </div>
        <C19></C19>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    {/* </Layout> */}
  </div>
)

export default IndexPage

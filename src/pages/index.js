import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import animated from "animate.css"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import C19 from "../components/c19stats"
import StateStats from "../components/stateStats"

const date = moment().format('MMMM Do YYYY')

const sendMail = () => {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  var url = 'https://enigmatic-bastion-43812.herokuapp.com/contact';
  var formData = new FormData();
  formData.append("name", "Tester");
  formData.append("email", "testermail@123.io");
  formData.append("subject", "Testing");
  formData.append("message", "This is a test mail");
  
  fetch(proxyUrl + url, {
    method: 'POST',
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    },
    body: formData
  })
    .then(response => response.text())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

  // fetch(url, {
  //   method: 'POST',
  //   mode: 'no-cors',
  //   headers: {'Accept': 'text/plain', 'Content-Type': 'text/plain'},
  //   body: formData
  // }).then(res => res.json())
  // .catch(error => console.error('Error:', error))
  // .then(response => console.log('Success:', response));

  // axios({
  //   method: 'POST',
  //   url: proxyUrl + targetUrl,
  //   data: formData,
  //   mode: 'no-cors',
  //   headers: {
  //     Accept: 'text/plain',
  //     'Content-Type': 'text/plain',
  //   },
  //   // withCredentials: false,
  //   // credentials: 'same-origin',
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
}

const IndexPage = () => (
  // <Layout>
  <div>
    <SEO title="Home" />
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="display-4 text-center title-left glow">{`covid19 · 코로나19`}</h1>
                {/* <h1 className="display-4 text-center title-right glow">코로나19</h1> */}
            </div>
            <p className="lead title-msg">Statistics monitor on covid19 with data sourced from Worldometer.</p>
            <p className="title-msg-sm">(Data is aggregated with continuous updating and metrics will refresh to appear most complete towards end of day)</p>
        </div>
    </div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="date">
              <div className="date-text">{date}</div>
              <div className="date-hr"></div>
            </div>
        </div>
        <StateStats></StateStats>
        <C19></C19>
        <div className="row justify-content-center">
          <button className="btn btnColor" onClick={sendMail}>email</button>
        </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* </Layout> */}
  </div>
)

export default IndexPage

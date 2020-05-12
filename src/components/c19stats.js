import React from "react"
import animated from "animate.css"
import axios from "axios"

class C19 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      us: "",
      usYesterday: "",
      sk: "",
      skYesterday: "",
      ca: "",
      caYesterday: ""
    }
  }

  componentDidMount() {
    axios
      .get(`https://corona.lmao.ninja/v2/countries/south%20korea`)
      .then(res =>
        this.setState({
          sk: {
            cases: res.data.cases,
            todayCases: res.data.todayCases,
            deaths: res.data.deaths,
            todayDeaths: res.data.todayDeaths,
            casesMillion: res.data.casesPerOneMillion,
            deathsMillion: res.data.deathsPerOneMillion,
            testsMillion: res.data.testsPerOneMillion,
            recovered: res.data.recovered,
            active: res.data.active,
            critical: res.data.critical,
            tests: res.data.tests,
          },
        })
      )
      .catch(err => alert(`Something went wrong...`))

    axios
      .get(
        `https://corona.lmao.ninja/v2/countries/south%20korea?yesterday=true`
      )
      .then(res => this.setState({ skYesterday: res.data.todayCases }))

    axios
      .get(`https://corona.lmao.ninja/v2/countries/us`)
      .then(res =>
        this.setState({
          us: {
            cases: res.data.cases,
            todayCases: res.data.todayCases,
            deaths: res.data.deaths,
            todayDeaths: res.data.todayDeaths,
            casesMillion: res.data.casesPerOneMillion,
            deathsMillion: res.data.deathsPerOneMillion,
            testsMillion: res.data.testsPerOneMillion,
            recovered: res.data.recovered,
            active: res.data.active,
            critical: res.data.critical,
            tests: res.data.tests,
          },
        })
      )
      .catch(err => alert(`Something went wrong...`))

    axios
      .get(`https://corona.lmao.ninja/v2/countries/us?yesterday=true`)
      .then(res => this.setState({ usYesterday: res.data.todayCases }))

      axios
      .get(`https://corona.lmao.ninja/v2/states/california`)
      .then(res =>
        this.setState({
          ca: {
            cases: res.data.cases,
            todayCases: res.data.todayCases,
            deaths: res.data.deaths,
            todayDeaths: res.data.todayDeaths,
            testsMillion: res.data.testsPerOneMillion,
            active: res.data.active,
            tests: res.data.tests,
          },
        })
      )
      .catch(err => alert(`Something went wrong...`))
  }

  render() {
    const usCasesPercent = this.state.us.casesMillion / 1000000
    const usDeathsPercent = this.state.us.deathsMillion / 1000000
    const usTestsPercent = this.state.us.testsMillion / 1000000
    const skCasesPercent = this.state.sk.casesMillion / 1000000
    const skDeathsPercent = this.state.sk.deathsMillion / 1000000
    const skTestsPercent = this.state.sk.testsMillion / 1000000
    const caTestsPercent = this.state.ca.testsMillion / 1000000
    return (
      <React.Fragment>
        <div className="row justify-content-around">
            <div className="card col-10 col-md-5 animated fadeInLeft">
            <div className="card-body">
                <h5 className="card-title">
                <img
                    className="flag"
                    src="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg"
                />{" "}
                US
                </h5>
                <div className="card-text">
                <div className="row justify-content-between cardRow">
                    <div>New Cases Today</div>
                    <div>{this.state.us.todayCases}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>New Cases Yesterday</div>
                    <div>{this.state.usYesterday}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Cases</div>
                    <div>{this.state.us.cases}</div>
                </div>
                <div className="row cardRow">
                    <div className="container">
                    <div className="row justify-content-between">
                        <div>Cases Per Million</div>
                        <div>{this.state.us.casesMillion}</div>
                    </div>
                    <div className="row justify-content-end">
                        <div>({usCasesPercent.toFixed(3)}%)</div>
                    </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row justify-content-between cardRow">
                    <div>Deaths Today</div>
                    <div>{this.state.us.todayDeaths}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Deaths</div>
                    <div>{this.state.us.deaths}</div>
                </div>
                <div className="row cardRow">
                    <div className="container">
                    <div className="row justify-content-between">
                        <div>Deaths Per Million</div>
                        <div>{this.state.us.deathsMillion}</div>
                    </div>
                    <div className="row justify-content-end">
                        ({usDeathsPercent.toFixed(4)}%)
                    </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row justify-content-between cardRow">
                    <div>Total Tested</div>
                    <div>{this.state.us.tests}</div>
                </div>
                <div className="row cardRow">
                    <div className="container">
                    <div className="row justify-content-between">
                        <div>Tested Per Million</div>
                        <div>{this.state.us.testsMillion}</div>
                    </div>
                    <div className="row justify-content-end">
                        <div>({usTestsPercent.toFixed(3)}%)</div>
                    </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row justify-content-between cardRow">
                    <div>Total Active</div>
                    <div>{this.state.us.active}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Recovered</div>
                    <div>{this.state.us.recovered}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Critical</div>
                    <div>{this.state.us.critical}</div>
                </div>
                </div>
            </div>
            </div>

            <div className="card col-10 col-md-5 animated fadeInRight">
            <div className="card-body">
                <h5 className="card-title">
                <img
                    className="flag"
                    src="https://lipis.github.io/flag-icon-css/flags/4x3/kr.svg"
                />{" "}
                한국
                </h5>
                <div className="card-text">
                <div className="row justify-content-between cardRow">
                    <div>New Cases Today</div>
                    <div>{this.state.sk.todayCases}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>New Cases Yesterday</div>
                    <div>{this.state.skYesterday}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Cases</div>
                    <div>{this.state.sk.cases}</div>
                </div>
                <div className="row cardRow">
                    <div className="container">
                    <div className="row justify-content-between">
                        <div>Cases Per Million</div>
                        <div>{this.state.sk.casesMillion}</div>
                    </div>
                    <div className="row justify-content-end">
                        <div>({skCasesPercent.toFixed(4)}%)</div>
                    </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row justify-content-between cardRow">
                    <div>Deaths Today</div>
                    <div>{this.state.sk.todayDeaths}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Deaths</div>
                    <div>{this.state.sk.deaths}</div>
                </div>
                <div className="row cardRow">
                    <div className="container">
                    <div className="row justify-content-between">
                        <div>Deaths Per Million</div>
                        <div>{this.state.sk.deathsMillion}</div>
                    </div>
                    <div className="row justify-content-end">
                        ({skDeathsPercent.toFixed(5)}%)
                    </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row justify-content-between cardRow">
                    <div>Total Tested</div>
                    <div>{this.state.sk.tests}</div>
                </div>
                <div className="row cardRow">
                    <div className="container">
                    <div className="row justify-content-between">
                        <div>Tested Per Million</div>
                        <div>{this.state.sk.testsMillion}</div>
                    </div>
                    <div className="row justify-content-end">
                        <div>({skTestsPercent.toFixed(3)}%)</div>
                    </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row justify-content-between cardRow">
                    <div>Total Active</div>
                    <div>{this.state.sk.active}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Recovered</div>
                    <div>{this.state.sk.recovered}</div>
                </div>
                <div className="row justify-content-between cardRow">
                    <div>Total Critical</div>
                    <div>{this.state.sk.critical}</div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default C19

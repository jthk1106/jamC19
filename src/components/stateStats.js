import React from "react"
import animated from "animate.css"
import axios from "axios"

class StateStats extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            state: "california",
            stateDisplay: "california",
            data: ""
        }
    }

    componentDidMount() {
        axios
        .get(`https://corona.lmao.ninja/v2/states/california`)
        .then(res =>
            this.setState({
                data: {
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

    search = () => {
        axios
        .get(`https://corona.lmao.ninja/v2/states/${this.state.state}`)
        .then(res =>
            this.setState({
                data: {
                    cases: res.data.cases,
                    todayCases: res.data.todayCases,
                    deaths: res.data.deaths,
                    todayDeaths: res.data.todayDeaths,
                    testsMillion: res.data.testsPerOneMillion,
                    active: res.data.active,
                    tests: res.data.tests,
                },
                stateDisplay: this.state.state
            })
        )
        .catch(err => alert(`Something went wrong...`))
    }

    handleEnter = (e) => {
        if(e.key === 'Enter') {
            this.search()
        }
    }

    render() {
        const testsPercent = this.state.data.testsMillion / 1000000
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <div className="input-group searchbar">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Search your state"
                            onChange={(e) => this.setState({state: e.target.value})}
                            onKeyPress={this.handleEnter}/>
                        <div className="input-group-append">
                        <button className="btn btnColor" type="button" id="button-addon2" onClick={this.search}>submit</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="card-State col-10 col-md-11 animated bounce">
                        <div className="card-body">
                            <h5 className="card-title-State">{this.state.stateDisplay}</h5>
                            <div className="card-text">
                                <div className="row justify-content-around">
                                    <div className="col-md-5">
                                        <div className="row justify-content-between cardRow">
                                            <div>New Cases Today</div>
                                            <div>{this.state.data.todayCases}</div>
                                        </div>
                                        <div className="row justify-content-between cardRow">
                                            <div>Total Cases</div>
                                            <div>{this.state.data.cases}</div>
                                        </div>
                                        <div className="hr-State"></div>
                                        <div className="row justify-content-between cardRow">
                                            <div>Deaths Today</div>
                                            <div>{this.state.data.todayDeaths}</div>
                                        </div>
                                        <div className="row justify-content-between cardRow">
                                            <div>Total Deaths</div>
                                            <div>{this.state.data.deaths}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row justify-content-between cardRow">
                                            <div>Total Tested</div>
                                            <div>{this.state.data.tests}</div>
                                        </div>
                                        <div className="row cardRow">
                                            <div className="container">
                                                <div className="row justify-content-between">
                                                    <div>Tested Per Million</div>
                                                    <div>{this.state.data.testsMillion}</div>
                                                </div>
                                                <div className="row justify-content-end">
                                                    <div>({testsPercent.toFixed(3)}%)</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hr-State"></div>
                                        <div className="row justify-content-between cardRow">
                                            <div>Total Active</div>
                                            <div>{this.state.data.active}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default StateStats
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import fetch from '../controllers/fetch';
import React, { Component } from 'react';
const { getAll } = fetch;

const formatNumbers = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
}

class Stats extends Component {
    constructor () {
        super();
        this.state = {};
    }

    componentDidMount() {
        getAll().then((data) => {
            if(data.confirmed || data.recovered || data.deaths){
                this.setState({
                    confirmed: formatNumbers(data.confirmed),
                    recovered: formatNumbers(data.recovered),
                    deaths: formatNumbers(data.deaths)
                });
            }
        });
    }
    
    
    render () {
        return (
            <div>
                <div className="col-md-4 col-sm-12">
                    <div className="divider-wrapper divider-three">
                        <div id="confirmed"><h1>{this.state.confirmed}</h1></div>
                    <h2>Confirmed</h2>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="divider-wrapper divider-two">
                        <div id="recovered"><h1>{this.state.recovered}</h1></div>
                        <h2>Recovered</h2>
                    </div>
			    </div>

                <div class="col-md-4 col-sm-6">
                    <div class="divider-wrapper divider-one">
                        <div id="deaths"><h1>{this.state.deaths}</h1></div>
                        <h2>Deaths</h2>
                    </div>
			    </div>
            </div>
            
        )
    }
}

export default Stats;

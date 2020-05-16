/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import fetch from '../controllers/fetch';
import React, { Component } from 'react';
const { getAll } = fetch;


class Countries extends Component {
    constructor () {
        super();
        this.state = {};
    }

    componentDidMount() {
        getAll().then((data) => {
            if(data.countries){
                let options = '<option>Please Select Country</option>';
                data.countries.forEach((country) => {
                    options = options + `<option value="${country}">${country}</option>`;
                })
                this.setState({
                    options: options
                })
            }
        });
    }

    render () {
        return (
            <select class="form-control btn email selectpicker countrypicker" id="countries" >
                {this.state.options}
            </select>
        )
    }
}

export default Countries;

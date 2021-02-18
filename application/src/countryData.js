import React from 'react';
import {Data} from './data';

export class Country extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount(){
        fetch('https://api.ip2country.info/ip?'+ this.props.name)
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                data: json
            })
        });
    }


    render(){
        return (
            <div>
                <h1>{this.state.data["countryName"]}</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
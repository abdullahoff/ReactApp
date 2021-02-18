import React from 'react';
import {Country} from './countryData';

export class Data extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount(){

        fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                data: json})
        });
    }
    
    
    render(){
        const isLoaded = this.state.isLoaded;
        const data = this.state.data;
        console.log(data);

        if(!isLoaded){
            return <h1>Still Loading</h1>
        }
        else{
            return (
                <div>
                    <h1>IP address</h1>
                        <p>{data.ip}</p>
                        <Country name = {data.ip}/>
                </div>
            )
        }

        
    }
}


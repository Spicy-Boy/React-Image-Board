import { Component } from "react";
import axios from "axios";
import CatalogItem from "./catalogItem";

class Catalog extends Component
{
    constructor()
    {
        super();

        this.state = {
            threads: [],
            serverIP: "108.49.99.17"
        };
    }

    //FETCH thread data from my api
    componentDidMount()
    {
        // my IP for now: http://108.49.99.17/
        //saved as a state in catalog.js
        const serverIP = this.state.serverIP;
        fetch("http://"+serverIP+"/api/threads/getThread")
        .then(res => res.json())  // Parse the JSON from the response
        .then((data) => {
            this.setState({threads: data.payload});
            // console.log(this.state.threads);
        });
    }

    render()
    {
        if (this.state.threads.length < 1)
        {
            return (
                <>
                    <center>LOADING...</center>
                </>
            );
        }
        else
        {
            // if state.threads has data, map it out and display as individual 
            return (
                <div className="catalog">
                    {this.state.threads.map((thread)=>{
                        return (
                            <CatalogItem key={thread.threadNo} thread={thread} serverIP={this.state.serverIP}/>
                        );
                    })}
                </div>
            );
        }

    }
}

export default Catalog;


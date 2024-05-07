import { Component } from "react";
import axios from "axios";
import CatalogItem from "./catalogItem";

class Catalog extends Component
{
    constructor()
    {
        super();

        this.state = {
            threads: []
        };
    }

    componentDidMount()
    {
        // my IP for now: http://108.49.99.17/
        // axios.get("http://108.49.99.17/api/threads/getThread")
        // .then((res) => this.setState({threads: res.data.results}))
        fetch("http://108.49.99.17/api/threads/getThread")
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
                            <CatalogItem key={thread.threadNo} thread={thread}/>
                        );
                    })}
                </div>
            );
        }

    }
}

export default Catalog;


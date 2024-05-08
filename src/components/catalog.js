import { Component } from "react";
// import axios from "axios";
import CatalogItem from "./catalogItem";

class Catalog extends Component
{

    render()
    {
        if (this.props.threads.length < 1)
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
                    {this.props.threads.map((thread)=>{
                        return (
                            <CatalogItem key={thread.threadNo} thread={thread} serverIP={this.props.serverIP}/>
                        );
                    })}
                </div>
            );
        }

    }
}

export default Catalog;


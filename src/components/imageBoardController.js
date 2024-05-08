import { Component } from "react";
import Header from './header';
import Catalog from './catalog';
import ThreadView from './threadView';

class ImageBoardController extends Component
{

    constructor()
    {
        super();

        this.state = {
            threads: [],
            serverIP: "108.49.99.17",
            selectedThread: null
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
        return(
            <div className="wrapper-main">
                <Header />
                <div className="wrapper-panels">
                    <Catalog serverIP={this.state.serverIP} threads={this.state.threads}/>
                    <ThreadView selectedThread={this.state.threads}/>
                </div>
            </div>
        );
    }
}

export default ImageBoardController;

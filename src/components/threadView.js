import { Component } from "react";
import Post from "./post";

class ThreadView extends Component 
{
    render()
    {
        const {thread} = this.props;

        if (thread)
        {
            return (
                <div className="thread-pane" id="thread-pane">
                    <div className="thread">
                        {/* {this.props.thread.posts[0].textContent} */}
                        {thread.posts.map((post, index)=>{
                            return <Post key={post.postNo} post={post} index={index}/>
                        })}
                    </div>
                </div>
            );
        } 
        else 
        {
            const invisible= {display: "none"}
            return (
                <div className="thread-pane" id="thread-pane" style={invisible}>
                    <h4>Please select a thread!</h4>
                </div>
            );
        }
    }
}

export default ThreadView;
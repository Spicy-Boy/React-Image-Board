import { Component } from "react";

class Post extends Component
{
    render()
    {
        const {index, post} = this.props;

        return (
            <h4>{post.textContent}</h4>
        );
    }
}

export default Post;
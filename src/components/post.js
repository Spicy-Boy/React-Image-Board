import { Component } from "react";

class Post extends Component
{
    render()
    {
        const {index, post} = this.props;

        if (index === 0) //OP
        {
            return (
                <div className="post-container-OP">
                    <div className="post-OP post" id={post.postNo}>
                        <div class="post-user-information">
                            <span className="username">{post.username}</span>
                            <span className="date"> {post.createdAt}</span>
                            <span className="postNo"> No.{post.postNo}</span>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="post-container">
                    <div className="reply-arrows">&gt;&gt;</div>
                    <div className="post-reply post" id={post.postNo}>
                        <div className="post-user-information">
                            <span className="username">{post.username}</span>
                            <span className="date"> {post.createdAt}</span>
                            <span className="postNo"> No.{post.postNo}</span>
                        </div>
                        <div className="post-user-information">
                            <span className="literally-the-word-replies">Replies: </span>
                            <span className="replies"></span>
                        </div>

                    </div>
                </div>
            );
        }

    }
}

export default Post;
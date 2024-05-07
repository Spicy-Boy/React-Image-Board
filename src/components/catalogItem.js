import { Component } from "react";

class CatalogItem extends Component {

    // constructor()
    // {
    //     super();
    // }

    render()
    {
        let {thread} = this.props;

        // vv in this case, imgSize is used to determine if the thumbnail is hosted on board server or somewhere else
        // (since foreign images aren't given any size metadata)
        let threadThumbnailUrl = "";
        if (thread.posts[0].imgSize)
        {
            threadThumbnailUrl = "http://108.49.99.17"+thread.posts[0].img;
        }
        else
        {
            threadThumbnailUrl = thread.posts[0].img;
        }

        return (
            <>
                <div className="thread-post" 
                data-threadNo={thread.threadNo}
                data-numberOfPosts={thread.posts.length}
                // data-dateOfMostRecentPost={thread.posts[thread.posts.length-1].createdAt.getTime()}
                >
                    {/* {thread.threadNo} */}
                    {/* NOTE vvv href points to nothing YET */}
                    <a href="#">
                        <img src={threadThumbnailUrl}/>
                    </a>
                </div>
            </>
        );
    }
}

export default CatalogItem;
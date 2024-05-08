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
            threadThumbnailUrl = "http://"+this.props.serverIP+thread.posts[0].img;
        }
        else
        {
            threadThumbnailUrl = thread.posts[0].img;
        }

        let numberOfImageReplies = -1;
        thread.posts.forEach((post) => {
            if (post.img)
            {
                numberOfImageReplies++;
            }
        });
        numberOfImageReplies--;

        return (
            <>
                <div className="thread-post" 
                data-threadno={thread.threadNo}
                data-numberofposts={thread.posts.length}
                data-dateofmostrecentpost={new Date(thread.posts[thread.posts.length-1].createdAt).getTime()}
                >
                    {/* {thread.threadNo} */}
                    {/* NOTE vvv href points to nothing YET */}
                    <a href="#">
                        <img src={threadThumbnailUrl} alt="Thumbnail for dynamically generated thread link.." />
                    </a>
                    <div className="thread-information">
                        <span>
                            R:<b> {thread.posts.length}</b> / I:<b>{numberOfImageReplies}</b>
                        </span>
                    </div>
                    <div className="teaser">
                        <b>{thread.title} </b>
                        {thread.posts[0].textContent}
                    </div>
                </div>
            </>
        );
    }
}

export default CatalogItem;
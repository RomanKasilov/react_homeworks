import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {PostDetails} from "../../components/posts-components/PostDetails";
import {postService} from "../../services/post.service";

const PostDetailsPage = () => {
    const {postId} = useParams();
    const [postDetails, setPostDetails] = useState()

    // const {state} = useLocation();
    useEffect(() => {
        postService.getById(postId).then(({data}) => setPostDetails(data))
    }, [postId]);

    return (<div>
        {postDetails && <PostDetails postDetails={postDetails}/>}
    </div>);
};

export {PostDetailsPage};
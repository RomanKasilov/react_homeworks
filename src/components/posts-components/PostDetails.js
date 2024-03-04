import {Comments} from "../comments-components/Comments";

const PostDetails = ({postDetails}) => {
    const {userId, id, title,body} = postDetails;
    return (
        <div>
            <h2>Post details</h2>
            <div>userId:{userId}</div>
            <div>postId:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <hr/>
            <h3>Post comments:</h3>
            <Comments postId = {id}/>

        </div>
    );
};

export {PostDetails};
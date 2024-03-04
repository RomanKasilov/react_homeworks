// import {useEffect, useState} from "react";
// import {commentService} from "../../services/comment.service";
import {Comment} from "./Comment";
import {useLoaderData} from "react-router-dom";

const Comments = ({postId}) => {
    // const [comments, setComments] = useState([])
    // useEffect(() => {
    //     commentService.getByPostId(postId).then(({data})=>setComments(data))
    // }, [postId]);
    const loader = useLoaderData();
    return (
        <div>
            {loader.map(value => <Comment key={value.id} value = {value}/>)}
            {/*{comments.map(comment => <Comment key={comment.id} comment = {comment}/>)}*/}
        </div>
    );
};

export {Comments};
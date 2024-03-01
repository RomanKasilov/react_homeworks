import {useEffect, useState} from "react";
import {commentsService} from "../../services/comments.service";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};
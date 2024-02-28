import {CommentsForm} from "../CommentsForm/CommentsForm";
import {AllComments} from "../AllComments/AllComments";
import {useEffect, useState} from "react";
import {comments_services} from "../../../Services/comments_services";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        comments_services.getAll().then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            <CommentsForm/>
            <AllComments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};
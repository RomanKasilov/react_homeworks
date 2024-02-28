import {useEffect, useState} from "react";

import {CommentsForm} from "../CommentsForm/CommentsForm";
import {AllComments} from "../AllComments/AllComments";
import {comments_services} from "../../../Services/comments_services";
import './CommmentsContainer.css'

const CommentsContainer = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        comments_services.getAll().then(({data})=>setComments(data))
    }, []);
    return (
        <div className={'wrapper'}>
            <CommentsForm setComments={setComments}/>
            <AllComments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};
import {Comment} from "../Comment/Comment";

const AllComments = ({comments}) => {

    return (
        <div>
            {comments.map(comment =><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {AllComments};
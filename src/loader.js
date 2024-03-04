
import {commentService} from "./services/comment.service";



const getComments = async ({params: {postId}}) => {
    const comments = await commentService.getByPostId(postId)
        .then(value => value.data);

    console.log(comments)
    return comments

}



export {getComments}
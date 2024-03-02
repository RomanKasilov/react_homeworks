import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
const navToComments = useNavigate();
    return (
        <div>
            <div>{post.title}</div>
            <button onClick={()=>navToComments(`/posts/${post.id}`,{state:post})}>post-details</button>
        </div>
    );
};

export {Post};
import {Post_InfoComponent} from "../Post_InfoComponent/Post_InfoComponent";
import {useState} from "react";

const PostComponent = ({post}) => {
    const {id, title} = post
    const [post_Info, setPost_Info] = useState()
    return (
        <div>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <button onClick={() => setPost_Info(post)}>Info</button>
            <hr/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            {post_Info && <Post_InfoComponent post={post}/>}
        </div>
    );
};

export {PostComponent};
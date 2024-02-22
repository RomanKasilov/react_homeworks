import {useEffect, useState} from "react";
import {jsonPostAPIService} from "../../../Services/jsonPostAPIService";
import {PostComponent} from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        jsonPostAPIService.getAll().then(({data})=> setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};
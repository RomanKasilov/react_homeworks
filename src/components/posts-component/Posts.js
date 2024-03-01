import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {postsService} from "../../services/posts.service";
import {Post} from "./Post";

const Posts = () => {

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
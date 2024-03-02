import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/users-page/UsersPage";
import {UserDetailsPage} from "./pages/user_details-page/UserDetailsPage";
import {PostsPage} from "./pages/posts-page/PostsPage";
import {PostDetailsPage} from "./pages/post_details-page/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
        children: [
            {index: true, element: <UsersPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:userId', element: <UserDetailsPage/>,
                children:[
                    {path:'posts', element:<PostsPage/>}
                ]},
            {path: 'posts/:postId', element:<PostDetailsPage/>}
        ]
    }
])
export {router}
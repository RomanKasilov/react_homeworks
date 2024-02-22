import {PostsComponent} from "./Components/Posts/PostsComponent/PostsComponent";
import {LaunchesComponent} from "./Components/SpaceX/Launches/LaunchesComponent";

const App = () => {
    return (
        <div>
            <PostsComponent/>
            <LaunchesComponent/>
        </div>
    );
};

export {App};

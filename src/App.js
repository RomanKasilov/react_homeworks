import {UsersContainer} from "./Components/Users/UsersContainer/UsersContainer";
import {CommentsContainer} from "./Components/Comments/CommentsContainer/CommentsContainer";
import './App.css';
import {CarsContainer} from "./Components/Cars/CarsContainer/CarsContainer";
const App = () => {
    return (
        <div className="App">
            <UsersContainer/>
            <CommentsContainer/>
            <CarsContainer/>
        </div>
    );
};

export {App};

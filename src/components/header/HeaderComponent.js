import './HeaderComponent.css'
import {NavLink} from "react-router-dom";
const HeaderComponent = () => {
    return (
        <div className={'Header'}>
            <NavLink to={'/todos'}>Todos</NavLink>
            <NavLink to={'/albums'}>Albums</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export {HeaderComponent};
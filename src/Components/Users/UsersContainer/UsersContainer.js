import {useEffect, useState} from "react";
import {users_service} from "../../../Services/users_service";
import {UsersForm} from "../UsersForm/UsersForm";
import {AllUsers} from "../AllUsers/AllUsers";

const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        users_service.getAll().then(({data})=>setUsers(data))
    }, []);
    return (
        <div>
            <UsersForm setUsers = {setUsers}/>
            <AllUsers users = {users}/>
        </div>
    );
};

export {UsersContainer};
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {users_service} from "../../../Services/users_service";
import {userFormValidator} from "../../../Validators/userFormValidator";

const UsersForm = ({setUsers}) => {
    const {register,reset,handleSubmit,formState:{isValid,errors}} = useForm({mode:'all', resolver:joiResolver(userFormValidator)});
    const create = async (user) => {
     await  users_service.create(user).then(({data})=> setUsers(value =>[...value, data]))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <h2>Create new user</h2>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <button>create</button>
                {errors.name&&<div>{errors.name.message}</div>}
                {errors.username&&<div>{errors.username.message}</div>}
            </form>
        </div>
    );
};

export {UsersForm};
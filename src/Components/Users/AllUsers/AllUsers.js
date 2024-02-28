import {User} from "../User/User";

const AllUsers = ({users}) => {
    return (
        <div>
            {users.map(user=><User user={user} key={user.id}/>)}
        </div>
    );
};

export {AllUsers};
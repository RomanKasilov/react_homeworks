import {useNavigate} from "react-router-dom";


const UserDetails = ({userDetails}) => {
    const {id,name,username,email,phone} = userDetails;
const navToUsersPosts = useNavigate();
    return (

        <div>
            <h2>User details</h2>
            <hr/>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <hr/>
            <button onClick={()=>{navToUsersPosts('posts')}}>post of current user</button>
        </div>
    );
};

export {UserDetails};
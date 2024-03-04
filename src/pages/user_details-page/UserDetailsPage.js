import {UserDetails} from "../../components/users-components/UserDetails/UserDetails";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/user.service";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)

    const {userId} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUserDetails(state)
        }else {
        userService.getById(userId).then(({data}) => setUserDetails(data))}
    }, [userId,state]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};
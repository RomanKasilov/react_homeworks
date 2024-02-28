const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>userid:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            {/*<div>email:{email}</div>*/}
            <hr/>
        </div>
    );
};

export {User};
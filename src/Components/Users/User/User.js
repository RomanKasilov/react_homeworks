const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>userid:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <hr/>
        </div>
    );
};

export {User};
const Post = ({post}) => {

    const {userId,id,name,body} = post;
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};
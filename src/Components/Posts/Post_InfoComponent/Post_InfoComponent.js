const Post_InfoComponent = ({post}) => {
    let {Postid,id,name,email,body} = post;
    return (
        <div>
            <div>Postid:{Postid}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post_InfoComponent};
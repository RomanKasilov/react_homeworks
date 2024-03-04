const Comment = ({comment, value}) => {
    // const {postId, id, name, email, body} = comment;
    const {postId, id, name, email, body} = value;

    return (
        <div>
            <div>postId:{postId}</div>
            <div>commentId:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {Comment};
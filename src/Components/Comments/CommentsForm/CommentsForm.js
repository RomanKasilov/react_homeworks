import {useForm} from "react-hook-form";
import {comments_services} from "../../../Services/comments_services";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentFormValidator} from "../../../Validators/commentFormValidator";

const CommentsForm = ({setComments}) => {
    const {register,
        reset,
        handleSubmit,
        formState: {isValid, errors}} = useForm({mode:'all', resolver:joiResolver(commentFormValidator)});
    const save = async (comment)=> {
       await comments_services.create(comment).then(({data})=>setComments(value=>[...value, data]))
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <h2>New post</h2>
                <input type="number" placeholder={'postId'} {...register('postId',{valueAsNumber:true})}/>
                <input type="text" placeholder='name' {...register('name')}/>
                <input type="text" placeholder={'your post'} {...register('body')}/>
                {errors.postId&&<div>{errors.postId.message}</div>}
                {errors.name&&<div>{errors.name.message}</div>}
                {errors.body&&<div>{errors.body.message}</div>}
                <button disabled={!isValid}>save post</button>
            </form>
        </div>
    );
};

export {CommentsForm};
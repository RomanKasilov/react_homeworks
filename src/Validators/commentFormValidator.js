import Joi from "joi";

const commentFormValidator = Joi.object({
    postId:Joi.number().min(1).max(100).required().messages({
        'number':'postId 1-100'
    }),
    name:Joi.string()
        .pattern(/^[ a-zA-Za-яА-ЯёЁїЇіІ0-9]{1,20}$/)
        .required()
        .messages({'string.pattern.base':'please, use letter symbols only. max 20'}),

    body:Joi.string()
        .pattern(/^[ a-zA-Za-яА-ЯёЁїЇіІ0-9]{1,255}$/)
        .required()
        .messages({'string.pattern.base':'please, use letter symbols only. max 20'}),
})
export {commentFormValidator}
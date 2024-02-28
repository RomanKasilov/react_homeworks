import Joi from "joi";

const userFormValidator = Joi.object({
    name:Joi.string()
        .pattern(/^[ a-zA-Za-яА-ЯёЁїЇіІ]{1,20}$/)
        .required()
        .messages({'string.pattern.base':'please, use letter symbols only. max 20'}),
    username:Joi.string()
        .pattern(/^[a-zA-Za-яА-ЯёЁїЇіІ0-9]{1,20}$/)
        .required()
        .messages({'string.pattern.base': 'please, use letter symbols and numbers only. max 20'})

})
export {userFormValidator}
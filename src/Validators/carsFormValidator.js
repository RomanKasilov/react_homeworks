import Joi from "joi";

const carsFormValidator = Joi.object({
    brand:Joi.string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .required()
        .messages({'string.pattern.base': 'please, use letters symbols only. max 20'}),
    price:Joi.number().min(0).max(100000)
        .required()
        .messages({'number.min': 'min price = 0', 'number.max':'max price = 100000'}),
    year:Joi.number().min(1990).max(2024)
        .required()
        .messages({'number.min': 'min year = 1990','number.max': 'max year = 2024'})
})
export {carsFormValidator}
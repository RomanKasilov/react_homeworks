import {useForm} from "react-hook-form";
import {car_service} from "../../../Services/cars_service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsFormValidator} from "../../../Validators/carsFormValidator";
import {useEffect} from "react";



const CarsForm = ({setCars, carUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'onSubmit',
        resolver: joiResolver(carsFormValidator)
    });
    useEffect(() => {
        if (carUpdate){
            setValue('brand', carUpdate.brand,{shouldValidate:true})
            setValue('price', carUpdate.price,{shouldValidate:true})
            setValue('year', carUpdate.year,{shouldValidate:true})
        }
    }, [carUpdate]);
    const create = async (car) =>{
       await car_service.create(car).then(({data})=>setCars(value =>[...value, data] ))
reset()
    }
    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="number" placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
            <input type="number" placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
            {errors.brand&&<div>{errors.brand.message}</div>}
            {errors.price&&<div>{errors.price.message}</div>}
            {errors.year&&<div>{errors.year.message}</div>}
            <button>create</button>
        </form>
    );
};

export {CarsForm};
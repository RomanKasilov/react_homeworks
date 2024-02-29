import {car_service} from "../../../Services/cars_service";

const Car = ({car, setCarUpdate, setReloadTrigger}) => {
    const {id,brand,price,year} = car;
    const deleteCar = async ()=>{
       await car_service.deleteById(id)
        setReloadTrigger(prev =>!prev)

    }
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};
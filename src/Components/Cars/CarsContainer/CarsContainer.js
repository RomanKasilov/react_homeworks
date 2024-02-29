import {useEffect, useState} from "react";
import {car_service} from "../../../Services/cars_service";
import {CarsForm} from "../CarsForm/CarsForm";
import {AllCars} from "../AllCars/AllCars";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [carUpdate, setCarUpdate] = useState(null)
    const [reloadTrigger, setReloadTrigger] = useState(null)
    useEffect(() => {
        car_service.getAll().then(({data})=>setCars(data))
    }, [reloadTrigger]);
    return (
        <div>
            <CarsForm setCars={setCars} carUpdate={carUpdate} setCarUpdate={setCarUpdate} setReloadTrigger={setReloadTrigger}/>
            <AllCars cars = {cars} setCarUpdate={setCarUpdate} setReloadTrigger={setReloadTrigger}/>
        </div>
    );
};

export {CarsContainer};
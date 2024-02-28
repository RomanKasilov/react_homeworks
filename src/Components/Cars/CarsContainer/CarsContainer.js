import {useEffect, useState} from "react";
import {car_service} from "../../../Services/cars_service";
import {CarsForm} from "../CarsForm/CarsForm";
import {AllCars} from "../AllCars/AllCars";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [carUpdate, setCarUpdate] = useState(null)
    useEffect(() => {
        car_service.getAll().then(({data})=>setCars(data))
    }, []);
    return (
        <div>
            <CarsForm setCars={setCars} carUpdate={carUpdate} setCarUpdate={setCarUpdate} />
            <AllCars cars = {cars} setCarUpdate={setCarUpdate}/>
        </div>
    );
};

export {CarsContainer};
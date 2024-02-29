import {Car} from "../Car/Car";

const AllCars = ({cars,setCarUpdate,setReloadTrigger}) => {

    return (
        <div>
            {cars.map(car =><Car key = {car.id} car={car} setCarUpdate={setCarUpdate} setReloadTrigger={setReloadTrigger}/>)}
        </div>
    );
};

export {AllCars};
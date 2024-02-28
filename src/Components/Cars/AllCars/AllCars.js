import {Car} from "../Car/Car";

const AllCars = ({cars,setCarUpdate}) => {

    return (
        <div>
            {cars.map(car =><Car key = {car.id} car={car} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export {AllCars};
import {useEffect, useState} from "react";
import {spaceXLaunchesService} from "../../../Services/spaceXLaunchesService";
import {LaunchComponent} from "../LaunchComponent/LaunchComponent";

const LaunchesComponent = () => {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        spaceXLaunchesService.getAll().then(({data})=>{
            const filtered = data.filter(value =>value.launch_year!='2020')
            setLaunches(filtered)
        })
    }, []);
    return (
        <div>
            {launches.map(launch =><LaunchComponent launch={launch} key={launch.flight_number}/> )}
        </div>
    );
};

export {LaunchesComponent};
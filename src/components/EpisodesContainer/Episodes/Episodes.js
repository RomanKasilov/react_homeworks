import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {episodeService} from "../../../services";
import {Episode} from "../Episode/Episode";

const Episodes = () => {
    const [episodesData, setEpisodesData] = useState({prev: null, next: null, results: []})

    const {query, setQuery} = useSearchParams({page:'1'});
    const page = query.get('page')


    useEffect(() => {
        episodeService.getAll(page).then(({data}) => setEpisodesData(() => {

                const {info: {prev, next}, results} = data;
                return {
                    next,
                    prev,
                    results
                }
            })
        )
    }, [page]);
    return (
        <div>
            {episodesData.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            <button>prev</button>
            <button>next</button>
        </div>
    );
};

export {Episodes};
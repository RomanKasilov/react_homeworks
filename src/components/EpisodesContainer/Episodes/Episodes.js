import {useEffect, useState} from "react";

import {episodeService} from "../../../services";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'
import {usePageQuery} from "../../../hooks";

const Episodes = () => {
    const [episodesData, setEpisodesData] = useState({prev: null, next: null, results: []})
const {page,prevPage,nextPage } = usePageQuery();

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
            <div className={css.Episodes}>
                {episodesData.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!episodesData.prev} onClick={prevPage}>prev</button>
                <button disabled={!episodesData.next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};
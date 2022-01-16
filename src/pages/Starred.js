import React, { useEffect, useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { useShows } from '../Misc/custom-hooks';
import {apiGet} from '../Misc/config';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {
    const [starred] = useShows(); 

    const [shows,setShows] = useShows(null);
    const [isLoading , setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        if (starred && starred.length > 0) {
            const promises = starred.map(showId => apiGet(`/shows/${showId}`));
            Promise.all(promises)
            .then(apiData => apiData.map(shows => ({shows})))
            .then(results => {
                console.log('shows' , results);
                setShows(results);
                setIsLoading(false)
            }).catch(err => {    
                setError(err.message);
                console.log("Error" ,err.message);
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
        }
    }, [starred])

    return (
        <MainPageLayout>
        { isLoading && <div> Shows are loading </div> }
        {error && <div>Error occured : {error} </div>}
        {!isLoading && !error && !shows && <div> No shows are Starred...</div>}
        {!isLoading && !error && shows && <ShowGrid data={shows} />}
        </MainPageLayout>
    );
};

export default Starred;

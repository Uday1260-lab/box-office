import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../Misc/config';
const Home = () => {
    const [ input,setInput ]= useState('');
    const [ results,setResults ] = useState(null);

    const [ searchOption,setSearchOption ] = useState('shows');
    const isShowsSearch = searchOption === 'shows';
    
    const onInputChange = (ev) => {
        setInput(ev.target.value);
    }
    const onSearch =(ev) => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result =>{
        setResults(result);
        });
    };

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13)
        onSearch();
    };

    const renderResults =() => {
        if(results && results.length === 0 ){
            return <div>No result Found :(</div>
        }
        if(results && results.length >0){
            return results[0].show ?  results.map( item => (
            <div key={item.show.id}>{item.show.name}</div>
            )) : results.map(item => ( 
            <div key={item.person.id}>{item.person.name}</div>
        ))
        }
        return null;
    };

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value);    
    }

    return (
        <MainPageLayout>
            <input type='text' placeholder='Search anything!' onChange={onInputChange} value={input} onKeyDown={onKeyDown} />
            <div>
                <label htmlFor='shows-search'>
                    <input id='shows-search' type='radio' checked={isShowsSearch} value='shows' onChange={onRadioChange} />
                    Shows                    
                </label>
                <label htmlFor='actors-search'>
                    <input id='actors-search' type='radio' checked={!isShowsSearch} value='people' onChange={onRadioChange} />
                    Actors                    
                </label>
            </div>
            <button type='button' onClick={onSearch}>Search</button>
            {renderResults()} 
        </MainPageLayout>
    );
};

export default Home

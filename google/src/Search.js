import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import './Search.css';


function Search() {
    return (
        <div className="search">
            <div className="search-input">
                <SearchIcon className="search-icon"></SearchIcon>
                <input></input>
                <MicIcon className="search-icon"></MicIcon>
            </div>
            <div className="search-buttons">
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search

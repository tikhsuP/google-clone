import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Search.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search-input">
                <SearchIcon className="search-icon"></SearchIcon>
                <input value={input} onChange={e => setInput(e.target.value)}></input>
                <MicIcon className="search-icon"></MicIcon>
            </div>

            {!hideButtons ? (
              <div className="search-buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
              </div>
            ) : (
              <div className="search-buttons">
                <Button className="search-buttons-hidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search-buttons-hidden" variant="outlined">I'm Feeling Lucky</Button>
              </div>
            )}
        </form>
    )
}

export default Search

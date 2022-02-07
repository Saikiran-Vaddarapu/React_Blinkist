import React from 'react';
import './search.css';

const SearchBar : React.FC = (props) =>
{
    return (
    <label>
        <input type="text" placeholder='Search by title or Author' name='search'></input>
    </label>
    );
}

export default SearchBar;
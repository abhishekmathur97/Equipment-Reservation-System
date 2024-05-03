import { useState } from "react";

const SearchBar = ({ 
    initialList,
    filteredList,
    setFilteredList }) => {
    const [ query, setQuery ] = useState('');

    const handleInputChange = (event) => {
        const newFilteredList = filteredList.filter(item => 
            JSON.stringify(item).toLowerCase().includes(event.target.value.toLowerCase()));

        setFilteredList(event.target.value.length ? newFilteredList : initialList);
        setQuery(event.target.value);
    };

    return (
        <div className="search-bar">
            <input type="text" 
                   placeholder="Search..."
                   value={query}
                   onChange={handleInputChange}/>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>

        </div>
    )
}

export default SearchBar;
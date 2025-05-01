import React from 'react';

export const SearchInput = ({searchTerm, setSearchTerm}) => {
    return (
        <form action="">
            <input
                type="search"
                placeholder='search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='search'>🔍</button>
        </form>
    );
};


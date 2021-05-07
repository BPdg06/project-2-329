import React from 'react';
import {useState} from 'react';

const Search = ({getSearch}) => {

    const [search, setSearch] = useState("");

    const onChange = (searchname) => {
        setSearch(searchname)
        getSearch(searchname)
    }

    return (
        <section className="search">
            <form>
                <input 
                    type="text"
                    className="searchForm"
                    placeholder="Type Character Name"
                    value={search}
                    onChange={(event) => onChange(event.target.value)}
                />
            </form>

        </section>
    );
};

export default Search;
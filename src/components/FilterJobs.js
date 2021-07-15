import React from 'react';
import './filterJobs.css'

const FilterJobs = ({filter, dieFilter, clearFilter}) => {
    return ( 
        <div className="cont_filter">
            <ul >
                <li>{filter.map(filterItem => (
                        <div key={filterItem}>
                            <p>{filterItem}</p>
                            <span onClick={() => dieFilter(filterItem)}></span>
                        </div>
                    ))}
                </li>
                <li><p onClick={clearFilter}>Clear</p></li>
            </ul>
        </div>
    );
}
 
export default FilterJobs;
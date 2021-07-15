import React from 'react';
import ItemJob from './ItemJob';
import './listJob.css';

const ListJobs = ({jobs,clickFilter}) => {
    const existJobs = (jobs.length > 0) ? true : false;
    return ( 
        <ul className="list_job">
            { existJobs
            ?  jobs.map(job => ( <ItemJob key={job.id} job={job} clickFilter={clickFilter}/>))
            : <li>Sorry, no jobs yet</li>
            }
        </ul>
    );
}
 
export default ListJobs;
import React,{ Fragment, useEffect, useState} from 'react';
import SiteHeader from './components/SiteHeader';
import ListJobs from './components/ListJobs';
import FilterJobs from './components/FilterJobs';
import DataJob from './data.json';

function App() { 
  const [filter, setFilters] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(DataJob),[]);

  const filterFunct = ({role,level,languages, tools}) => {
    if(filter.length === 0){
      return true;
    }
    const itemFilter = [role, level];
    
    if(tools){
      itemFilter.push(...tools);
    }
    if(languages){
      itemFilter.push(...languages);
    }
    
    return itemFilter.some((item) => filter.includes(item));
  }
  const clickFilter = (filterItem,) => {
    if(filter.includes(filterItem)) return;
    setFilters([...filter, filterItem]);
  }

  const dieFilter = (removeItem) =>{
    setFilters(filter.filter(f => f !== removeItem));
  }
  
  const filterJobs = jobs.filter(filterFunct);

  const clearFilter = () => {
    setFilters([]);
  }

  return (
    <Fragment>
      <SiteHeader />
      {(filter.length > 0) 
        ? <FilterJobs 
            filter={filter}
            dieFilter={dieFilter}
            clearFilter={clearFilter}
          />
        : null}
      <ListJobs jobs={filterJobs} clickFilter={clickFilter}/>
    </Fragment>
  );
}

export default App;

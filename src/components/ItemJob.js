import React from 'react';

const ItemJob = ({job,clickFilter}) => {

    const {
        company,
        logo,
        nnew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools} = job;

    return ( 
        <li>
            <div className="left"><img src={logo} alt={company} /> </div>
            <div className="center">
                <div className="center_header">
                    <p>{company}</p>
                    {(nnew) ? <span className="new">NEW!</span> : null}
                    {(featured) ? <span className="featured">FEATURED</span> : null}
                </div>
                <div className="center_body">
                    <p>{position}</p>
                </div>
                <div className="center_footer">
                    <p>{postedAt}</p>
                    <p>{contract}</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="right">
                <span onClick={() => clickFilter(role)}>{role}</span>
                <span onClick={() => clickFilter(level)}>{level}</span>
                {languages.map(jlan => (
                   <span key={jlan} onClick={() => clickFilter(jlan)}>{jlan}</span>
                ))}
                {tools.map(jtools => (
                   <span key={jtools} onClick={() => clickFilter(jtools)}>{jtools}</span>
                ))}
            </div>
        </li>
    );
}
 
export default ItemJob;
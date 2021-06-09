import React from 'react';

const Country = ({country}) => {
    return (
        <div className="m-4 text-center">
            <img class="rounded-lg" src={country.flag} alt="" />
            <p className="text-2xl">{country.name}</p>
        </div>
    );
};

export default Country;
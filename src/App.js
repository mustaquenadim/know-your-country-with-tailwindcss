import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

const App = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCountries(data);
        })
    }, [])
    return (
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-5">
            {
                countries.map((country, index) => <Country key={index} country={country}></Country>)
            }
            </div>
        </div>
    );
}

export default App;

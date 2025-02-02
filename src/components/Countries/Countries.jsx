import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    // declared an state hook to load data
    const [countries, setCountries] = useState([]);

    // to load data using useEffect

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));


    }, [])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {
                countries.map(country => <Country key={country.cca3}></Country>)
            }
        </div>
    );
};

export default Countries;
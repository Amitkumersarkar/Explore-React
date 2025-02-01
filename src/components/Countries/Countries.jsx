import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    // declared an state hook to load data
    const [countries, setCountries] = useState([]);

    // to load data using useEffect

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => console.log(data));


    }, [])
    return (
        <div>
            <h3>Countries</h3>

        </div>
    );
};

export default Countries;
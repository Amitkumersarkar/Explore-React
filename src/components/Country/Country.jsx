import { useState } from 'react';
import './Country.css';
const Country = ({ country }) => {
    // console.log(country);
    // destructuring country

    const { name, flags, population, area, cca3 } = country;

    const [Visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!Visited);
        // setVisited(!true);
    }

    return (
        <div className="country">
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited ? 'I have visited this country..!!' : 'I want to visit'}

        </div>
    );
};

export default Country;
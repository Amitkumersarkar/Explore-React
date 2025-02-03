import './Country.css';
const Country = ({ country }) => {
    // console.log(country);
    // destructuring country

    const { name, flags, population, area, cca3 } = country;
    return (
        <div className="country">
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button>Visited</button>
        </div>
    );
};

export default Country;
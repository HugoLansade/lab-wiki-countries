import React from 'react'
import countries from "./../countries.json";

export default function CountryDetails(props) {
    
    
    const {cca3} = props.match.params;
    const country = countries.find((el) => el.cca3 === cca3);
    console.log(country)
    return (
        <div className="col-7">
                    <h1>{country.name.official}</h1>
                    <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td style={{width: "30%"}}>Capital</td>                         
                        <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                        {country.area}
                            <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((border) => {
                                    return (
                                        <li><a href={border}>{countries.find((el) => el.cca3 === border).name.official}</a></li>
                                    )
                                })}
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table>
        </div>
    )
}

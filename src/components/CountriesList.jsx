import React, { Component } from 'react'
import { Link } from "react-router-dom";
import countries from "./../countries.json";

export default class CountriesList extends Component {
    state = {
        countries : [...countries],
    }


    // render() {
    //     <div className="container">
    //             <div className="row">
    //                 <div className="col-5" >
    //                 {/* style={{"max-height: 90vh; overflow: scroll"}} */}
    //     return (
            
                    
    //                     <div className="list-group">
    //                         {this.state.countries.map((country) => {
    //                             return (
    //                             <Link key={country.cca3} to={"/countries/" + country.cca3}> <p>{country.name.official}</p> </Link>
    //                             )
    //                         })}
    //                     </div>          
    //     )
    //                 </div>
    //             </div>
    //         </div>  
    // }
    
    render() {
        
        return (
                    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}} >
                        <div className="list-group">
                            {this.state.countries.map((country) => {
                                return (
                                <Link className="list-group-item list-group-item-action" key={country.cca3} to={"/countries/" + country.cca3}> <p>{country.name.official}</p></Link>
                                )
                            })}
                        </div> 
                    </div>         
        )
                    
    }
}


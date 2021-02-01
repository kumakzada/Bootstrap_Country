import React,{useEffect,useState} from "react";
import './index.css';
import axios from "axios";

export default function App(){

const [countries, setcountries] = useState([]);


useEffect(() =>{
	axios.get("https://restcountries.eu/rest/v2/all")
	.then(response => setcountries(response.data));
},[]);
function search(rows){
	return rows.filter((row) =>row.capital.toLowerCase().indexOf(countries)>-1);
}
return(
	<div className="container">
 		 <div>
                <form>
                     <div className="input-group my-3">
                        <input type="text" className="form-control" value={countries} onChange={(e) => setcountries(e.target.value)} placeholder="Ulke Giriniz" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Ara</button>

                    </div>
                </form>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Names</th>
                            <th scope="col">Capital</th>
                            <th scope="col">Region</th>
                            <th scope="col">flag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map(counter =>
                            <tr key={counter.numericCode}>
                                <td>{counter.name}</td>
                                <td>{counter.capital}</td>
                                <td>{counter.region}</td>
                                <td><img src={counter.flag} style={{ height: 50 , width: 80}} alt="flag"/></td>
                            </tr>
                        )}
                    </tbody>
                </table>
				
            </div>
	</div>
)


}
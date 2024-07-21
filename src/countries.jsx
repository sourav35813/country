import { useEffect, useState } from "react";
const CountryCard = ({name, flagImg, alt}) =>{
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            width:"200px",
            height:"200px",
            border:"2px solid black",
            borderRadius:"8px",
            padding:"10px",
            margin:"10px",
            gap:"10px"
        }}>
            <img src={flagImg} alt={alt} style ={{width:"100px",height:"100px"}}/>
            <h2>{name}</h2>
            
        </div>
    )
}
function Countries() {
 const API_URL = "https://xcountries-backend.azurewebsites.net/all";
//  const tempArr = [1,2,3,4,5,6,7,8];
const [country, setcountry] = useState([])
console.log(country);
useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => {setcountry(data)}).catch(error => console.error("Error fetching data: ", error));
},[])
    return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
    }}>
        {
            country.map(cont =><CountryCard key ={cont.abbr} name={cont.name} flagImg={cont.flag} alt={cont.abbr}/>)
        }
    </div>
)
}
export default Countries;

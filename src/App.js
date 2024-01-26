import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [city,setCity] = useState("");
  const [info,setInfo] = useState("");
  const key="put your key here";
  
useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(res => res.json())
    .then(result => setInfo(result));
},[city]);
 
  return (
    <div>
      <div className='input'>
       <input type='search' id='input-text' placeholder='Enter the city' onChange={(e)=>setCity(e.target.value)}/>
      </div>
      {!info ? 
        (<div className='container'>
          <p>no data</p></div>
        ):
        (
        <div className='container'>
         <p>{info.name}</p>
         <p>Weather Conditions : {info.weather && info.weather[0].main}</p>
         <p>Max-Temp : {info.main && info.main.temp_max}</p>
         <p>Min-Temp : {info.main && info.main.temp_min}</p>
         <p>Humidity : {info.main && info.main.humidity}</p>
         <p>Pressure : {info.main && info.main.pressure}</p>
        </div>)}
    </div>
  );
}

export default App;

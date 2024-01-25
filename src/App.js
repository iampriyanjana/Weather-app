import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [city,setCity] = useState("");
  const [info,setInfo] = useState(null);
  const key="09e5330151ce11d113679e323e8cf339";


  useEffect(() => {
    if (city.length >= 3){
    const timer = setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      .then(res => res.json())
      .then(result => setInfo(result));
    }, 500);
  }
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

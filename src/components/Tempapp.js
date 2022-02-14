import React, {useEffect, useState } from "react";
import "./css/style.css";


const Tempapp=()=>{
      
      const [city,setCity]=useState("null")
      const[search,setSearch]=useState("mumbai")
      setTimeout(() => {
          
      }, 1000);
      useEffect(()=>{
          const fetchApi =async()=>{
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=80ee285d7c3b40ef8fc124553211812&q=${search}&aqi=no`)
              const resJson= await response.json();
               setCity(resJson.current)
                
          }
          const timer = setTimeout(() => {
            fetchApi();
          }, 500);
          return () => clearTimeout(timer);
         },[search]);
           
         

    return(
        <>

        <div className="box">
        <h1>Weather App</h1>
           <div className="inputData">
               <input type="search" className="inputField" onChange={(event)=>{setSearch(event.target.value)

               }}/>
            </div>
            {!city?(
                <p>Please enter correct city name</p>
            ):(
                <div>
           <div className="info">
            <h2 className="location">
            <i className="fas fa-map-marked-alt icon"></i> {search}
            </h2>
            <h1 className="temp">
                {city.temp_c} cel</h1>
                <h3 className="tempmin-max"> Humidity:{city.humidity}| Cloud:{city.cloud}</h3>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -two"></div>
            
        </div>
        </div>
        )}
        </div>
        
        
        
        
    </>
    )
}

export default Tempapp;
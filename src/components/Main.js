import React, { useEffect,useState } from 'react'
import Card from './Card'

const Main=()=> {
    const [data,setData]=useState([]);
    const  getCovidData = async() =>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
           const actualData=await res.json();
           console.log(actualData.statewise[0]);
           setData(actualData.statewise[0]);
        }
        catch(err)
        {
            console.log(err);
        }
     
    }  
     useEffect(()=>{
       getCovidData();

   },[]
   );

  return (
    <>
    <h1 style={{textAlign:"center",fontSize:"350%"}}><span className="badge rounded-pill bg-danger">LIVE</span> COVID-19 STATS TRACKER</h1>
    <div  className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                        <div className="col-lg-4">
                            <div className="card" >
                              <h2 className="title"><span >Country</span></h2>
                              <h3 className="data">India</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                          
                            <Card title="Confirmed" sentData={data.confirmed}/>
                            
                        </div>
                        <div className="col-lg-4">
                              
                              <Card title="Recovered" sentData={data.recovered}/>
                              
                        </div>
                        <div className="col-lg-4">
                            
                            <Card title="Active" sentData={data.active}/>
                            
                        </div>
                        <div className="col-lg-4">
                           
                            <Card title="Deaths" sentData={data.deaths}/>
                            
                        </div>
                        <div className="col-lg-4">
                            
                            <Card title="Last Update" sentData={data.lastupdatedtime}/>
                            
                        </div>
                      
            </div>

</div>
    
    </>
  );
}

export default Main;
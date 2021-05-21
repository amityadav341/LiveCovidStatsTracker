import React, { useEffect,useState } from 'react'


const Statewise=()=> {
    const [data,setData]=useState([]);
    const  getCovidData = async() =>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
           const actualData=await res.json();
           console.log(actualData.statewise);
           setData(actualData.statewise);
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
    <h1 style={{textAlign:"center",margin:"5%"}}><span className="badge rounded-pill bg-danger">Live </span> Statewise Covid-19 Stats Dashboard</h1>
        
                <div className="table table-responsive align-center">
                <table className="table table-hover table-dark table-bordered">
                    <thead className="thead thead-secondary" >
                    <tr>
                        <th className="bg-secondary">State</th>
                        <th>Confirmed</th>
                        <th className="bg-success">Recovered</th>
                        <th className="bg-maroon">Active</th>
                        <th className="bg-danger">Deaths</th>
                        <th>Lastupdatedtime</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                                {
                                        data.map((curElm,ind)=>{
                                            return(
                                                <tr><td key={ind}>{curElm.state}</td>
                                                <td key={ind}>{curElm.confirmed}</td>
                                                <td key={ind}>{curElm.recovered}</td>
                                                <td key={ind}>{curElm.active}</td>
                                                <td key={ind}>{curElm.deaths}</td>
                                                <td key={ind}>{curElm.lastupdatedtime}</td>
                                                
                                                </tr>
                                                
                                            )

                                        })
                                    }
                    
                    </tbody>
                </table>
                </div>
        
     </>
  );
}

export default Statewise;
import React, { useState } from 'react';

const Mileage = () => {
   const [distance,setDistance]=useState('');
       const [fuel,setFuel]=useState('');
       const fuelneeded = distance && fuel ?(parseFloat(distance)/parseFloat(fuel)).toFixed(2):0;
       return (
           <div className='container py-4 px-3' style={{maxWidth:600}}>
               <div className='mb-4 text-center fs-2 fw-bold' >Total fuel required</div>
               <div class="form-floating mb-3">
               <input type="number" class="form-control" id="floatingInput1"  placeholder=" "  value={distance}  onChange={(e)=>setDistance(e.target.value)}/>
               <label for="floatingInput1">Distance travelled(km)</label>
               </div>
   
               <div class="form-floating mb-3">
               <input type="number" class="form-control" id="floatingInput2"  placeholder=" "  value={fuel}  onChange={(e)=>setFuel(e.target.value)}/>
               <label for="floatingInput2">Fuel Filled in liters</label>
               </div>
               <div className='alert alert-info text-center'>
                   <p>Mileage:{fuelneeded} liters</p>
               </div>
   
               
           </div>
       );
}

export default Mileage;

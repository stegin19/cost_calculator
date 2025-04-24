import React from 'react';
import { useState } from 'react';

const FuelCost = () => {
    const [distance,setDistance]=useState('');
    const [milage,setMilage]=useState('');
    const [fuel,setFuel]=useState('');
    
    const fuelCost =
    distance && milage && fuel
      ? ((parseFloat(distance) / parseFloat(milage)) * parseFloat(fuel)).toFixed(2)
      : 0;

    return (
        <div className="container py-4 px-3" style={{ maxWidth: '600px' }}>
            <div className='mb-4 text-center fs-2 fw-bold' >Fuel Cost</div>
            <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput1"  placeholder=" "  value={distance}  onChange={(e)=>setDistance(e.target.value)}/>
            <label for="floatingInput1">Distance(km)</label>
            </div>

            <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput2"  placeholder=" "  value={milage}  onChange={(e)=>setMilage(e.target.value)}/>
            <label for="floatingInput2">Mileage of car</label>
            </div>

            <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput3"  placeholder=" "  value={fuel}  onChange={(e)=>setFuel(e.target.value)}/>
            <label for="floatingInput3">Fuel cost</label>
            </div>
             
            <div className="alert alert-dark text-center">

                <p>Fuel Cost:{fuelCost} INR</p>
                </div>
            



            
        </div>
    );
}

export default FuelCost;

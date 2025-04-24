import React from 'react';
import { useState } from 'react';

const FuelNeeded = () => {
    const [distance,setDistance]=useState('');
    const [mileage,setMilage]=useState('');
    const fuelneeded = distance && mileage ?(parseFloat(distance)/parseFloat(mileage)).toFixed(2):0;
    return (
        <div className='container py-4 px-3' style={{maxWidth:600}}>
            <div className='mb-4 text-center fs-2 fw-bold' >Total fuel required</div>
            <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput1"  placeholder=" "  value={distance}  onChange={(e)=>setDistance(e.target.value)}/>
            <label for="floatingInput1">Distance to cover</label>
            </div>

            <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput2"  placeholder=" "  value={mileage}  onChange={(e)=>setMilage(e.target.value)}/>
            <label for="floatingInput2">Mileage of car</label>
            </div>
            <div className='alert alert-info text-center'>
                <p>Total fiel required:{fuelneeded}/l</p>
            </div>

            
        </div>
    );
}

export default FuelNeeded;

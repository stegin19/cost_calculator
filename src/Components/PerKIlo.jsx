import React from 'react';
import { useState } from 'react';

const PerKIlo = () => {
    const [fuel,setFuel]=useState('');
    const [mileage,setMilage]=useState('');

    const perkilo= fuel && mileage ?(parseFloat(fuel) / parseFloat(mileage)).toFixed(2):0;
    return (
        <div className='container py-4 px-3  text-center'style={{maxWidth:600}}>
            <div className='text-Center mb-4 fs-4 fw-bold'>Cost per kilometer</div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput3"  placeholder=" "  value={fuel}  onChange={(e)=>setFuel(e.target.value)}/>
            <label for="floatingInput3">Fuel Price</label>
            </div>


            <div class="form-floating mb-3">
               <input type="number" class="form-control" id="floatingInput2"  placeholder=" "  value={mileage}  onChange={(e)=>setMilage(e.target.value)}/>
               <label for="floatingInput2">Mileage of car</label>
               </div>

               <div className='alert alert-info text-center'>
                   <p>Cost per kilometer:{perkilo}INR</p>
               </div>

            
        </div>
    );
}

export default PerKIlo;

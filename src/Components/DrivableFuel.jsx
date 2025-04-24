import React from 'react';
import { useState } from 'react';

const DrivableFuel = () => {
    const [fuel,setFuel]=useState();
    const [mileage,setMilage]=useState();
    const drivablefuel= fuel && mileage ?(parseFloat(fuel)* parseFloat(mileage)).toFixed(2):0;
    return (

        
        <div className='container py-4 px-3'style={{maxWidth:600}}>


               
                {/* 
                <div className="mb-3">
                 <Link to="/" className="btn btn-outline-primary">← Back to Home</Link>
                </div> */}

            
            <div className='text-center fs-2 fw-bold'>Drivable Distance</div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput1"  placeholder=" "  value={fuel}  onChange={(e)=>setFuel(e.target.value)}/>
            <label for="floatingInput1">Fuel left</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput2"  placeholder=" "  value={mileage}  onChange={(e)=>setMilage(e.target.value)}/>
            <label for="floatingInput2">Mileage of car</label>
            </div>

            <div className='alert alert-info text-center'>
                <p>Drivable distance:{drivablefuel} km</p>
            </div>
        </div>
    );
}

export default DrivableFuel;

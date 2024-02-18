import React from 'react';

const HeaderComp = () => {
    return (
        <div className='row p-3' > 
            <div className='col-md-2 p-2'>
                <h3 style={{ color:'rgb(89, 175, 89)'}}>GUVI</h3>
            </div>
            <div className='col-md-2 p-3'>
                <span > COURSES</span>
            </div>
            <div className='col-md-2 p-3'>
                <span>LIVE CLASSES</span>
            </div>
            <div className='col-md-2 p-3'>
                <span >PRACTICE</span>
            </div>
            <div className='col-md-2 p-3'>
                <span >RESOURCE</span>
            </div>
            <div className='col-md-2 p-3'>
                <span>OUR PRODUCTS</span>
          </div>
        </div>
    );
};

export default HeaderComp;
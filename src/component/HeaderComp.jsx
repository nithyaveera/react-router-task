import React from 'react';

const HeaderComp = () => {
    return (
        <div className='row p-3' > 
            <div className='col-md-2'>
                <img src="./public/img/logo.webp" className='img-fluid' alt="" srcset="" />
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
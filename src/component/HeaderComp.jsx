import React from 'react';

const HeaderComp = () => {
    return (
        <div className='d-flex justify-content-between p-2' > 
            <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="" srcset="" />
            <div className='d-flex justify-content-between p-3'>
                <span > COURSES</span>
                <span style={{ paddingLeft: '6vw' }}>LIVE CLASSES</span>
                <span style={{ paddingLeft: '6vw' }}>PRACTICE</span>
                <span style={{ paddingLeft: '6vw' }}>RESOURCE</span>
                <span style={{ paddingLeft: '6vw' }}>OUR PRODUCTS</span>
            
            </div>
        </div>
    );
};

export default HeaderComp;
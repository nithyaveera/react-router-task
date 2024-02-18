import React from 'react';
import CartComp from './CartComp';

const CareerComp = ({data}) => {
    let filterCareer = data.filter((item) => item.head === "Career")
    return (
        <div>
            <div className='row'>
                {filterCareer.map((item) => {
                    return (
                        <>
                            <CartComp item={item}/>
                        </>
                )
            })}
            </div>
        </div>
    );
};

export default CareerComp;
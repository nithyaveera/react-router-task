import React from 'react';
import CartComp from './CartComp';

const Fullstackcomp = ({ data }) => {
    let filterfullstack = data.filter((item) => item.head === "Full Stack Development")
    return (
        <div>
            <div className='row'>
            {filterfullstack.map((item) => {
                return (
                    <>
                        <CartComp item={item} />
                    </>
                )
            })}
            </div>
        </div>
    );
};

export default Fullstackcomp;
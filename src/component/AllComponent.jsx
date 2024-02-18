import React from 'react';
import CartComp from './CartComp';

const AllComponent = ({data}) => {
    return (
        <div className='container'>
            <div className='row'>
                {data.map((item) => {
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

export default AllComponent;
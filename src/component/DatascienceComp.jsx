import React from 'react';
import CartComp from './CartComp';

const DatascienceComp = ({data}) => {
    let filterDataScience = data.filter((item) => item.head === "Data Science")
    return (
        <div>
            <div className='row'>
                {filterDataScience.map((item) => {
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

export default DatascienceComp;
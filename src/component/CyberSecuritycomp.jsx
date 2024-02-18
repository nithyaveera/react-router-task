import React from 'react';
import CartComp from './CartComp';

const CyberSecuritycomp = ({data}) => {
    let filerCyberSecurity = data.filter((item) => item.head === "Cybersecurity")
    return (
        <div>
            <div className='row'>
            {filerCyberSecurity.map((item) => {
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

export default CyberSecuritycomp;
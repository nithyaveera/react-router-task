import React from 'react';

const CartComp = ({item}) => {
    return (
        <div className='col-md-4 pt-4 mt-4 mb-3'>
            <div className='card h-100'>
                <img src={item.image} className="card-img-top productimg" alt="..." />
                <div class="card-body">
                    <p class="card-text">{item.content}</p>
                </div>
                <div className="card-footer d-flex ">
                    <small className="text-body-secondary">{item.date} {item.month} 2023 </small>
                    <small><li>No comments</li></small>
                </div>
                </div>
                </div>
    );
};

export default CartComp;
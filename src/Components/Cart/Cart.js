import React from 'react';

const Cart = (props) => {
    //get price from cart and calculate all operation 
    const { cart } = props;
    let total = 0;
    for (const course of cart) {
        total = total + course.price;
    }
    const grand_total = total - (total * 0.10);
    return (
        <div>
            <h2>Order Summary</h2>
            <hr style={{ color: '#ff3300' }} />
            <h4>Order Courses : {props.cart.length}</h4>
            <h4>Total Fee : {total.toFixed(2)}</h4>
            <h4>Discount : {total ? '10%' : '00'}</h4>
            <h3>Total Include Discount : {grand_total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
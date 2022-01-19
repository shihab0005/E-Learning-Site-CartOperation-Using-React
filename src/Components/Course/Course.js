import React from 'react';
import Rating from 'react-rating';
import './Course.css'

const Course = (props) => {
    // console.log(props)
    //distructuring elememts..
    const { image, name, instructor, price, SeatAvailable, discount, rating } = props.course
    return (
        <div className='course_container'>

            <div className="course_image">
                <img src={image} alt="" />
            </div>
            <div className="course_details">
                <p>Name : <span style={{ color: '#0066cc', fontWeight: 'bolder', fontSize: '20px' }} >{name}</span></p>

                <p>Instructor : <span style={{ color: '#b300b3', fontWeight: 'bolder' }} >{instructor}</span></p>

                <small>Seat : <span style={{ color: '#00b300', fontWeight: 'bolder' }} >{SeatAvailable}</span></small><br />
                <small>Discount :<span style={{ color: '#ff0000', fontWeight: 'bolder', fontSize: '15px' }} >{discount}</span></small><br />

                <small>Price : BDT <span style={{ color: '#ff0000', fontWeight: 'bolder', fontSize: '15px' }} >{price}</span></small><br />
                {/* use rating from react-rating package */}
                <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star icon-star"
                    fullSymbol="fas fa-star icon-star"
                >
                </Rating><br /><br />
                {/* call handleAddToCart Butto */}
                <button onClick={() => props.handelAddToCart(props.course)}><i className="fas fa-shopping-cart shopping"></i>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;
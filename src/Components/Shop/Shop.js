import React, { useEffect, useState } from 'react';
import './Shop.css'

import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    // load data from json 
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./FakeCourseData.json')
            .then(res => res.json())
            // set data in courses
            .then(data => setCourses(data))
    }, [])
    //create handle function
    const handelAddToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart)
    }
    return (
        <div className='shop_container'>
            {/* display all the course info from this div */}
            <div className="course_container">

                {
                    //send all courscss data to the course components
                    courses.map(course => <Course
                        //key for uiquely identify
                        key={course.id}
                        course={course}
                        handelAddToCart={handelAddToCart}
                    ></Course>)
                }

            </div>
            {/* display cart operation from this div */}
            <div className="cart_container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>


        </div>
    );
};

export default Shop;
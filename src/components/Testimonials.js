import React from 'react';
import Slider from 'react-slick';
import '../styles/testimonials.css';
import user1 from '/public/img/users/user1.jpg';
import user2 from '/public/img/users/user2.jpg';
import user3 from '/public/img/users/user3.jpg';

const Testimonials = () => {
        const settings= {
            dots:true,
            infinite:true,
            autoplay:true,
            speed:1000,
            swipeToSlide:true,
            autoplaySpeed:2000,
            slidesToShow:3,

            responsive:[
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinte: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }

    return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>I had an amazing experience staying at this hotel! The room was cozy yet modern, with everything I needed for 
                a relaxing getaway. The air conditioning worked perfectly, and the bathroom was spotless. 
                I especially loved the soft lighting, which gave the room a warm and inviting feel. 
                Will definitely be back!</p>

            <div className="d-flex align-items-center gap-4 mt-3">

            <img src={user1} className="testimonial-img rounded-2" alt="" />
            <div>
                    <h6 className="mb-0 mt-3">Ajith Sinha</h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>TI had an amazing experience staying at this hotel! The room was cozy yet modern, with everything I needed 
                for a relaxing getaway. The air conditioning worked perfectly, and the bathroom was spotless. I especially 
                loved the soft lighting, which gave the room a warm and inviting feel. Will definitely be back!
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">

            <img src={user2} className="testimonial-img rounded-2" alt="" />
            <div>
                    <h6 className="mb-0 mt-3">Ashwin Roy</h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>The attention to detail in this hotel is impressive. My room was beautifully decorated, and the ambiance was peaceful. 
                The staff were extremely courteous and always ready to assist. The bed was so comfortable that I slept like a baby. 
                Plus, the room service was prompt and delicious. Absolutely worth every penny!
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">

            <img src={user3} className="testimonial-img rounded-2" alt="" />
            <div>
                    <h6 className="mb-0 mt-3">Rachel Matthews</h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Stayed here for a weekend, and it was one of the best hotel experiences I've had. The room was well-designed, super clean, 
                and had a luxurious feel. The view from my balcony was stunning, and the complimentary toiletries were a nice touch. 
                I highly recommend this hotel to anyone looking for a relaxing stay.</p>

            <div className="d-flex align-items-center gap-4 mt-3">

            <img src={user1} className="testimonial-img rounded-2" alt="" />
            <div>
                    <h6 className="mb-0 mt-3">Aniket Kotari </h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div> 
        
    </Slider>    
    );
}

export default Testimonials;


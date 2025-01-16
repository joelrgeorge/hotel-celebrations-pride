import React from 'react';
import '../styles/newsletter.css';

import {Container ,Row, Col }from 'reactstrap'
import maleTourist from '../../public/img/male-tourist.png'



const NewsLetter = () => {
    return (
    <section className="newsletter">
        <Container>
            <Row>

            <Col lg='6'>
                <div className="newsletter__content">
                <h2>If you wish to receive latest insights from Us..</h2>

                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email'/>
                    <button className="btn newsletter__btn">Subscribe</button>
                </div>

<p>Subscribe to receive our latest Brochures and Tariff Cards</p>
</div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt=""/>
                </div>
            </Col>

                </Row>
        </Container>
    </section>
    )
}

export default NewsLetter;
import React from "react";
import "../../styles/headerSection.css";
import { Container, Row, Col } from 'reactstrap';

const CommonSection = ({ title, backgroundImage }) => {
    return (
        <section 
            className="common__section"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${backgroundImage}) no-repeat center center`,
                backgroundSize: "cover"
            }}
        >
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CommonSection;
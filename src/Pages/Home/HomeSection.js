import React from 'react';
import { Container } from 'react-bootstrap';

const HomeSection = (props) => {
    const newId = props.title.replace(/\s/g, '');
    return (
        <Container id={newId} className="sectionContainer my-5">
            <h3>{props.title}</h3>
            <hr></hr>
            <p>{props.children}</p>
        </Container>
    );
}

export default HomeSection;
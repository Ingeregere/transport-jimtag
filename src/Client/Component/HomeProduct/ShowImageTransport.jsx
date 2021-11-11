import React from 'react';
import {Card} from "react-bootstrap";
const API = "https://backend-e-commerce-transport.jimtag.fr/api/image/"

const ShowImageTransport = ({item, method, getId}) => {
    return (
        <Card.Img variant="top" src={`${API}${item}/${method}/${getId.id}`} className={'imagecarrousel'} />
    );
};
export default ShowImageTransport;
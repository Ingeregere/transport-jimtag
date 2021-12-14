import React from 'react';
import {Card} from "react-bootstrap";
const API = "https://www.back-office.jimtag.fr/images/transports/"

const ShowImageTransport = ({item}) => {
    return (
        <Card.Img variant="top" src={`${API}${item.firstImage}`} className={'imagecarrousel'} />
    );
};
export default ShowImageTransport;
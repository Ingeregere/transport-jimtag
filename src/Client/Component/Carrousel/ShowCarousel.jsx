import React from 'react';
import {Card} from "react-bootstrap";
const API = "https://www.back-office.jimtag.fr/images/transports/"

const ShowImage = ({item}) => {
    return (
        <Card.Img variant="top" src={`${API}${item.slide}`} className={'imagecarrousel'} />
    );
};
export default ShowImage;
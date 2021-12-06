import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Button, Card, Container, Nav } from 'react-bootstrap'
import './style.css'

function Paiement() {
    return (
        <Container fluid={false} >
                <Card className={'misenpageSat'}>
                    <Card.Header className={'headerBg'}>
                        <Nav variant="tabs" defaultActiveKey="#first">
                        </Nav>
                    </Card.Header>
                    <Card.Body className={'p-5'}>
                        <Card.Title> <h1>Paiement sécurisé</h1></Card.Title>
                        <Card.Text className={'text-dark'} >
                        <h3>Notre boutique utilise la technologie de cryptage SSL qui vous offre une sécurité maximale, notamment sur la protection des données personnelles.</h3>

                        <p> <br/> <BsFillArrowRightCircleFill /> {" "}La location
                        Mode de règlement : paiement de <strong>60 %</strong> après le chargement, et <strong>40 %</strong>  restant à payer après la réception de la marchandise. </p>
                        <p><br/><BsFillArrowRightCircleFill />	{" "}L’importation 
                        Mode de règlement : paiement de <strong> 100 % </strong> à la commande. 
                        Le dépôt de l’argent se fera un compte commun entre la société et vous ! Dont le retrait oblige la signature de ses deux partenaires après la livraison de véhicule! </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        
    )
}

export default Paiement

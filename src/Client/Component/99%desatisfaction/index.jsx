import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import './style.css'

function Satisfaction() {
    return (
        <Container fluid={false} >
                <Card className={'misenpageSat'}>
                    <Card.Header className={'headerBg'}>
                        <Nav variant="tabs" defaultActiveKey="#first">
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Garantie satisfaite ou remboursée</Card.Title>
                        <Card.Text className={'text-dark'} >
                         Même si nous sommes sûrs de la qualité de nos véhicules et de la satisfaction 
                        de nos clients, nous proposons 
                        le Satisfait ou Remboursé pendant 2 jours après la réception du véhicule !.
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        
    )
}

export default Satisfaction

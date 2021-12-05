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
                        <Card.Title><h1>Besoin d'aide ?</h1></Card.Title>
                        <Card.Text className={'text-dark'} >
                        Nous sommes toujours là pour vous répondre  24H/24 et 7j/7 ! <br />
                        Et vous avez plusieurs moyens de nous contacter  : <br />
                        WhatsApp: +33644832157/+25762243766  <br />
                        Email: contact@jimtag.fr/info@jimtag.com  <br />
                        SMS: +25762243766<br />
                        Appel téléphonique: +25722224593<br />

                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        
    )
}

export default Satisfaction

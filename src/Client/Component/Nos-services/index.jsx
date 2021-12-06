import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import './style.css'

function Service24h() {
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
                        Nous sommes toujours là pour vous répondre  <strong>24H/24 et 7j/7 !</strong> <br />
                        Et vous avez plusieurs moyens de nous contacter  : <br />
                        WhatsApp: <strong> +33644832157 / +25762243766 </strong>  <br />
                        Email: <strong> contact@jimtag.fr/info@jimtag.com </strong>  <br />
                        SMS: <strong>+25762243766</strong><br />
                        Appel téléphonique: <strong>+25722224593</strong><br />
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        
    )
}

export default Service24h

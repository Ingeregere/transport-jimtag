import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './style.css'

function SevicesClient() {
    return (
        <Container fluid={false} >
                <Card className={'misenpageSat'}>
                    <Card.Header className={'headerBg'}>
                        <Nav variant="tabs" defaultActiveKey="#first">
                        </Nav>
                    </Card.Header>
                    <Card.Body >
                        <Card.Title > <h1>Nos services </h1></Card.Title>
                        <Card.Text className={'text-dark'}>
                        Les meilleurs choix des experts. <br/>
                    Trouvez le camion qui vous convient.<br/>
                    <h2> <BsFillArrowRightCircleFill /> Location des camions </h2>
                    Jimtag Transport propose des locations de courte ou de longue durée aux exploitants 
                    de camions et constitue une solution de secours idéale pour les entreprises qui travaillent en sous-traitance.
                    Zones desservies : Tous les pays de la communauté de l’Afrique de l’Est 

                <ul className={'ml-5'}>
                    <li>Bujumbura, Burundi.</li>
                    <li>Mombasa, Kenya.</li>
                    <li>Kigali, Rwanda.</li>
                    <li>Kampala, Ouganda.</li>
                    <li>Dar es Salaam, Tanzanie.</li>
                    <li>Et ses environs.</li>
                </ul>

               <h2> <BsFillArrowRightCircleFill />Vente et Importation des camions sur commande</h2>		 
                <p className={'ml-5 '}>
                                Tous nos véhicules sont importés depuis l’Europe. Livraison : <br/>
                Pour éviter les frais de stockage et de main d'œuvre élevés, 
                nous travaillons directement auprès de nos producteurs et n’avons donc aucun intermédiaire.
                Cela nous permet de vous proposer 
                des tarifs vraiment avantageux par rapport à ce que vous pourriez avoir dans un autre magasin.
                </p>

                <h2> <BsFillArrowRightCircleFill />Importation des engins de chantier sur commande </h2>	 
                <p className={'ml-5'}>Tous nos engins de chantier sont importés depuis l’Europe.</p>

                <h2>  <BsFillArrowRightCircleFill />Importation des pièces détachées sur commande </h2>  
                <p className={'ml-5'}>Toutes nos pièces détachées sont importées depuis l’Europe.</p>


                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        
    )
}

export default SevicesClient

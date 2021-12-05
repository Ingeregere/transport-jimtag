import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './style.css'

function FAQ() {
    return (
        <Container fluid={false} >
                <Card className={'misenpageSat'}>
                    <Card.Header className={'headerBg'}>
                        <Nav variant="tabs" defaultActiveKey="#first">
                        </Nav>
                    </Card.Header>
                    <Card.Body className={'p-5'} >
                        <Card.Title > <h1>F.A.Q </h1></Card.Title>
                        <Card.Text className={'text-dark'}>
                        
                    <h2> <BsFillArrowRightCircleFill /> {" "}Quels sont les temps d’expédition pour vos Camions et Machines? </h2>
                    <p>Nous prenons 3-5 jours pour traiter votre commande puis 4 semaines pour vous la livrer.
                    Par exemple, si vous commandez le vôtre aujourd’hui, vous serez livré au plus tard au 35è jour.
                    </p>

               <h2> <BsFillArrowRightCircleFill /> {" "}Expédiez-vous partout dans le monde?</h2>		 
                <p className={'ml-5 '}>
                Non, absolument. Nous livrons uniquement au Burundi, Kenya, Ouganda, Rwanda, et Tanzanie.
                </p>

                <h2> <BsFillArrowRightCircleFill /> {" "}D’où expédions-nous votre véhicule? </h2>	 
                <p className={'ml-5'}>Nos bureaux sont situés au Burundi, Rwanda et Tanzanie. <br />
                    Notre entrepôt international quant à lui est situé en France.
</p>

                <h2>  <BsFillArrowRightCircleFill /> {" "}Fournissez-vous des informations 
                du suivi/pistage du véhicule?
                </h2>  
                <p className={'ml-5'}>Oui, attendez 15 jours après votre commande et demandez-nous
                 via e-mail à info@jimtag.com / contact@jimtag.fr
                 </p>

                 <h2>  <BsFillArrowRightCircleFill /> {" "}	
                 Il manque certains articles de ma commande, que se passe-t-il?
                </h2>  
                <p className={'ml-5'}>
                Nos camions et machines sont expédiés séparément selon votre commande. 
                Si celle-ci contient par exemple des véhicules de deux entrepôts différents, 
                il y aura par conséquent deux livraisons. Le reste de la commande arrivera très certainement sous peu.
                </p>
                <h2>  <BsFillArrowRightCircleFill /> {" "}	
                	J’ai reçu un véhicule endommagé. Que puis-je faire?
                </h2>  
                <p className={'ml-5'}>
                Nous sommes navrés d’entendre cela. Envoyez-nous simplement une image du véhicule endommagé en question à l'adresse e-mail: info@jimtag.com / contact@jimtag.fr et 
                nous vous enverrons un remboursement ou une pièce similaire de remplacement aussi vite que possible.
                </p>
                <h2>  <BsFillArrowRightCircleFill /> {" "}	
                	Où êtes-vous situés?
                </h2>  
                <p className={'ml-5'}>
                Nous sommes situés à l’adresse suivante : <span style={{color: '#5ce1e6'}}>Avenue de l'amitié, Bujumbura-Burundi</span>
                </p>

                <h2>  <BsFillArrowRightCircleFill /> {" "}	
                	Où êtes-vous situés?
                </h2>  
                <p className={'ml-5'}>
                Nous sommes situés à l’adresse suivante : <span style={{color: '#5ce1e6'}}>Avenue de l'amitié, Bujumbura-Burundi</span>
                </p>

                <h2>  <BsFillArrowRightCircleFill /> {" "}	
                Je n’ai toujours pas reçu ma commande. Qu’est-ce qui prend autant de temps?
                </h2>  
                <p className={'ml-5'}>
                Nous vous prions de nous excuser pour le retard. Parfois, l’expédition internationale peut prendre 
                plus de temps que prévu en raison du dédouanement. Vous pouvez par contre tracer votre 
                commande et voir où elle se trouve à tout moment. Si vous estimez toujours avoir 
                besoin d’aide dans le traçage de votre véhicule ou que vous souhaitez vous renseigner 
                sur cette dernière, veuillez communiquer 
                avec nous par courriel à l'adresse suivante: <span style={{color: '#5ce1e6'}}>info@jimtag.com / contact@jimtag.fr</span>
                
                </p>

                <h2>  <BsFillArrowRightCircleFill /> {" "}	
                        Avez-vous une politique de remboursement?
                </h2>  
                <p className={'ml-5'}>
                Nous faisons de notre mieux pour résoudre tous les problèmes que nos clients pourraient 
                rencontrer avec leurs véhicules en ligne. Si vous désirez tout de même recevoir
                 un remboursement sur votre commande, nous pouvons bien entendu accomplir le paiement, 
                 dans le cas où le recours est fait dans les 3 jours suivant la date de la commande et 
                 que le ou les véhicules concernés ne sont pas soldés.
                 Pour plus d’informations, veuillez en lire davantage notre politique de remboursement.
                </p>


                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        
    )
}

export default FAQ

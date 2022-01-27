import React from "react";
import Logo from './images/logo.svg'
import Arrow from './images/icon-arrow-down.svg'
import CardSide from "./components/CardSide";

import EggImage from './images/desktop/image-transform.jpg'
import PinkCupImage from './images/desktop/image-stand-out.jpg'
import CardBottom from "./components/CardBottom";

import AppleImage from './images/desktop/image-graphic-design.jpg'
import OrangeImage from './images/desktop/image-photography.jpg'
import ClientReview from "./components/ClientReview";

import EmilyPhoto from './images/image-emily.jpg'
import ThomasPhoto from './images/image-thomas.jpg'
import JenniePhoto from './images/image-jennie.jpg'
import CardPhoto from "./components/CardPhoto";


import gallery1 from './images/desktop/image-gallery-cone.jpg'
import gallery2 from './images/desktop/image-gallery-milkbottles.jpg'
import gallery3 from './images/desktop/image-gallery-orange.jpg'
import gallery4 from './images/desktop/image-gallery-sugarcubes.jpg'

import FaceIcon from './images/icon-facebook.svg'
import InstagramIcon from './images/icon-instagram.svg'
import PinterestIcon from './images/icon-pinterest.svg'
import TwitterIcon from './images/icon-twitter.svg'

export default  () => {

    const openMenu = ()=>{
        const menuMobile = document.getElementById('menuMobile')
        menuMobile.style.display == 'block' ? menuMobile.style.display = 'none' : menuMobile.style.display = 'block'

        const MenuHamburguer = document.querySelector('.MenuHamburguer')
        if(menuMobile.style.display == 'block'){
            MenuHamburguer.style.opacity = .7
        } else{
            MenuHamburguer.style.opacity = 1
        }
    }



    return(
        <>
            <section id="header">
                <header>
              

                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="MenuHamburguer" onClick={()=> openMenu()}>
                        

                    </div>
                    <nav id="navMenu">
                        <ul>
                            <li> <a href="">About</a> </li>
                            <li> <a href="">Services</a> </li>
                            <li> <a href="">Projects</a> </li>
                            <li> <a href="" id="btnContact">CONTACT</a> </li>
                        </ul>
                    </nav>
                </header>
                <div className="menuDisplay" id="menuMobile">
                            <ul>
                            <li> <a href="">About</a> </li>
                            <li> <a href="">Services</a> </li>
                            <li> <a href="">Projects</a> </li>
                            <li> <a href="">CONTACT</a> </li>
                            </ul>
                        </div>

                <div className="titleBox">
                <h1>WE ARE CREATIVES</h1>
                <img src={Arrow} alt="arrow icon" />
                </div>
            
            </section>

            <CardSide Title={'Transform your brand'}
            Paragraph={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you'}
            Color={'var(--Yellow)'}
            bgImage={EggImage}
            />
            <CardSide Title={'Stand out to the right audience'}
            Paragraph={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'}
            Color={'var(--Soft-red)'}
            bgImage={PinkCupImage}
            Orientation={'row-reverse'}
            />

            <div className="CardBottomBox">
                <CardBottom bgImage={AppleImage} Title={'Graphic design'} Paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>
                <CardBottom bgImage={OrangeImage} Title={'Photography'} Paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
            </div>


            <div className="ClientTestimonials">
                <h2>Client Testimonials</h2>
                <div className="Testimonials">
                    <ClientReview ClientCharge={'Marketing Director'} ClientName={'Emily R.'} ClientPhoto={EmilyPhoto} ClientReview={' We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'}/>
                    <ClientReview ClientCharge={'Chief Operating Officer'} ClientName={'Thomas S.'} ClientPhoto={ThomasPhoto} ClientReview={'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'}/>
                    <ClientReview ClientCharge={'Business Owner'} ClientName={'Jennie F.'} ClientPhoto={JenniePhoto} ClientReview={'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'}/>
                </div>
            </div>

            <div className="gallery">
                <CardPhoto bgImage={gallery2}/>
                <CardPhoto bgImage={gallery3}/>
                <CardPhoto bgImage={gallery1}/>
                <CardPhoto bgImage={gallery4}/>
            
            </div>

            <footer>
                <div className="contentFooter">
                    <h2>sunnyside</h2>
                    <div className="menu">
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Project</a>
                    </div>
                    <div className="socialMedias">
                            <img src={FaceIcon} alt="face" />
                            <img src={InstagramIcon} alt="face" />
                            <img src={TwitterIcon} alt="face" />
                            <img src={PinterestIcon} alt="face" />
                    </div>
                </div>
            </footer>
        </>
    )
}
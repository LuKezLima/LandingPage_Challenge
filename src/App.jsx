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
import DireitoTrabImg from './images/desktop/Direito-Trabalhista.jpg'
import DireitoCivilImg from './images/desktop/direito-civil.jpg'
import DireitoImob from './images/desktop/imob.jpg'
import DireitoEmp from './images/desktop/direEmp.jpg'


import EmilyPhoto from './images/image-emily.jpg'
import ThomasPhoto from './images/image-thomas.jpg'
import JenniePhoto from './images/image-jennie.jpg'
import CardPhoto from "./components/CardPhoto";


import gallery1 from './images/desktop/image-gallery-cone.jpg'
import gallery2 from './images/desktop/image-gallery-milkbottles.jpg'
import gallery3 from './images/desktop/image-gallery-orange.jpg'
import gallery4 from './images/desktop/image-gallery-sugarcubes.jpg'
import undraw from './images/undraw.svg'

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

    const goTo = () => {
        document.getElementById('divSeparator').scrollIntoView();
    }

    const goToAbout = () => {
        document.getElementById('about').scrollIntoView();
    }




    return(
        <>
            <section id="header">
                <header>
              

                    <div className="logo">
                        <h2>Law & Order</h2>
                    </div>

                    <div className="MenuHamburguer" onClick={()=> openMenu()}>
                        

                    </div>
                    <nav id="navMenu">
                        <ul>
                          
                            <li > <a onClick={goTo} href="#divSeparator">Serviços</a> </li>
                            <li> <a onClick={goToAbout} href="#gallery">Sobre</a> </li>
                
                        </ul>
                    </nav>
                </header>
                <div className="menuDisplay" id="menuMobile">
                    
                            <ul>
                           
                            <li> <a onClick={goTo} href="#divSeparator">Serviços</a> </li>
                            <li> <a onClick={goToAbout} href="#gallery">Sobre</a> </li>

                            </ul>
                        </div>

                <div className="titleBox">
                <h1>justiça em 1° lugar</h1>
                <h3>venha conhecer nossos serviços</h3>
                <img src={Arrow} onClick={goTo} id='arrow2' alt="arrow icon" />
                </div>
            
            </section>
            <div id="divSeparator" className="divServices">
            <h3 style={{fontSize:'1.3rem', textDecoration:'underline', color:'#ffffff', textShadow:'2px 1px 3px #000000'}}> NOSSOS SERVIÇOS</h3>
            </div>
                    
            <CardSide Title={'Direito trabalhista'}
            Paragraph={'A Justiça do Trabalho é a competente para julgar as causas relacionadas aos direitos trabalhistas e esses direitos são garantidos a todo trabalhador que tenha um vínculo de emprego com outra pessoa, sendo ela física ou jurídica denominada de empregador.'}
            Color={'gray'}
            bgImage={DireitoTrabImg}
            />
            <CardSide Title={'DIREITO CIVIL'}
            Paragraph={'O Direito Civil abrange um conjunto de normas que rege os direitos e os deveres das relações de ordem privada, sejam elas entre pessoas ou bens.'}
            Color={'gray'}
            bgImage={DireitoCivilImg}
            Orientation={'row-reverse'}
            />

            <div className="CardBottomBox">
                <CardBottom bgImage={DireitoImob} Title={'Direito Imobiliário'} Paragraph="O Direito Imobiliário é um dos ramos da advocacia mais procurados no Brasil, exatamente porque visa regular as relações de locação e compra/venda de imóveis dentro da legalidade."/>
                <CardBottom bgImage={DireitoEmp} Title={'Direito Empresarial'} Paragraph="A dinâmica e estratégia de uma empresa tornam desnecessária a existência de um departamento jurídico. Contudo, com relações comerciais cada vez mais complexas, a assessoria jurídica em Direito Empresarial tem sido crucial para o êxito econômico de um negócio"/>
            </div>
            <div className="gallery" id="about">
                <div className="titleGal">
                <h3>Sobre nós</h3>
                </div>
                <div className="imgAndP">
                    <img src={undraw} alt="imagem " />
                <p>A Law & Order apresenta um novo conceito de atendimento jurídico empresarial, levando ao cliente mais qualidade e maior precisão, transmitindo confiabilidade, segurança e reputação.
Contamos com profissionais especializados e com grande experiência no mercado jurídico.
Nossos advogados e colaboradores são escolhidos nas mais prestigiadas universidades do país e com grande conceito no mercado.
Nossos serviços abrangem a consultoria e assessoria jurídica em Direito Empresarial, Tributário e Societário, incluindo gestão de precatórios judiciais, fusões, aquisições e incorporações empresarias, planejamento sucessório, inclusive em plataforma de Trust, reorganização societária, administração dos passivos tributários, etc.</p>
                </div>
               
            </div>
                


            <div className="ClientTestimonials">
                <h2 style={{color:'#ffffff'}}>O que nossos clientes dizem</h2>
                <div className="Testimonials">
                    <ClientReview ClientName={'Maria R.'} ClientPhoto={EmilyPhoto} ClientReview={'Nós colocamos nossas confianças no trabalho da Law & Order e eles conseguiram superar nossas expectativas, serviço de qualidade e preço justo. Recomendo!'}/>
                    <ClientReview ClientName={'Fernando S.'} ClientPhoto={ThomasPhoto} ClientReview={'Eu estava apavorado com o processo judicial que recebi, contatei a empresa e logo fui atendido com uma solução rápida e eficaz, super satisfeito...'}/>
                    <ClientReview ClientName={'Laura F.'} ClientPhoto={JenniePhoto} ClientReview={'Todo o processo burocrático envolvendo a compra da minha casa foi resolvido pela Law & Order, eles resolveram tudo sem dor de cabeça e no final foi só pegar a chave.'}/>
                </div>
            </div>

         
            <footer>
                <div className="contentFooter">
                    <h2>Law & Order</h2>
                    <div className="menu">
                        <a href="">Serviços</a>
                        <a href="">Sobre</a>
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
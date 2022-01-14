import React from 'react';
import './styles/services.css';
import './styles/typing-effect.css';
//import Logo from './../images/logo-insepci.jpg';
//import Logo from './../images/logoInsepci.png';
//import Logo2 from './../images/logoInsepci.png';
//import Instagram from './../icons/instagram2.png';
//import Phone from './../icons/phone3.png';
//import Mail from './../icons/gmail.png';
//import MenuBurger from './../icons/fuego.png';
//import ClosedMenu from './../icons/close.png';
import ServicesCards from './Pages/ServicesCards.jsx';
import Insepci from '../images/insepci-img.jpg';

function Services(){
        return(
            <div className='wrapper'>
                <ServicesCards
                    img={Insepci}
                    title='Herramientas'
                    description='implementos'
                    price='$30' />
                <ServicesCards
                    img={Insepci}
                    title='Herramientas'
                    description='implementos'
                    price='$30' />
                <ServicesCards
                    img={Insepci}
                    title='Herramientas'
                    description='implementos'
                    price='$30' />
                <ServicesCards
                    img={Insepci}
                    title='Herramientas'
                    description='implementos'
                    price='$30' />
                <ServicesCards
                    img={Insepci}
                    title='Herramientas'
                    description='implementos'
                    price='$30' />
                <ServicesCards
                    img={Insepci}
                    title='Herramientas'
                    description='implementos'
                    price='$30' />
            </div>
    )
};



export default Services;
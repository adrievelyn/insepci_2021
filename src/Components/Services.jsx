import React from 'react';
import './styles/services.css';
import './styles/typing-effect.css';
//import Logo from './../images/logo-insepci.jpg';
import Logo from './../images/logoInsepci.png';
import Logo2 from './../images/logoInsepci.png';
import Instagram from './../icons/instagram2.png';
import Phone from './../icons/phone3.png';
import Mail from './../icons/gmail.png';
import MenuBurger from './../icons/fuego.png';
import ClosedMenu from './../icons/close.png';



class Services extends React.Component{
    render(){
        return(
            <div>
            <div>
                <div className='banner-menu__ppal' >
                <img className='banner__logo-img' src={Logo} alt='Logo'></img>
                    
                        <a className='menu' href="#1">Nosotros</a>
                        <a className='menu' href="#2">Servicios</a>
                        <a className='menu' href="#3">Cursos</a>    
                        <a className='menu' href="#4">Productos</a>
                        <a className='menu' href="#5">Contáctanos</a> 

                       <div className="banner-menu">
                    <input type='checkbox'></input>
                    <img className='menu-img' src={MenuBurger} alt="menu burger"></img>
                    <p>Menú</p>
                    <i className="fa-solid fa-burger"></i>
                    <i className="fas fa-times"></i>
                    <nav className="banner-menu__resp">
                        <img className='fas fa-times' src={ClosedMenu} alt="close menu"></img>
                     <ul>
                        <li><a className='menu2' href="#1">Nosotros</a></li>
                        <li><a className='menu2' href="#2">Servicios</a></li>
                        <li><a className='menu2' href="#3">Cursos</a></li>    
                        <li><a className='menu2' href="#4">Productos</a></li>
                        <li><a className='menu2' href="#5">Contáctanos</a></li> 
                     </ul>
                    </nav>
                </div>
                </div>
            </div>
                
            <div className='grettings'>
            <div className='grettings_typing-effect'>
            ¡Bienvenidos a INSEPCI 2021!
            </div>
            <h1 className='principalTitle'>INVERSIONES EN SERVICIOS Y PREVENCIÓN CONTRA INCENDIOS</h1>
            </div>
            
            <div>
          
            <footer className='footer'>
                 <img className='footer__logo-img2' src={Logo2} alt='logo'></img>
                  <p className='footer__text'>Copyright: Insepci.2021. <br></br> Todos los derechos reservados.</p>
            
                  <a href='https://instagram.com/@insepci2021?utm_medium=copy-link' target="blank">
                    <img className='footer__icon-instagram' src={Instagram} alt='imagen de instagram'></img>
                  </a>
                  <a href='tel:+584242922862'><img className='footer__icon-phone' src={Phone} alt='imágen de teléfono'></img></a>
                  <a href='mailto:inversiones.s.p.c.i.2021@gmail.com?subject=Gracias%20por%20contactarme' target="_blank" rel="noreferrer"><img className='footer__icon-mail' src={Mail} alt='imágen de email'></img></a>

                    <p className='footer__text2'>Dirección: Av. Miranda, Edificio Oficentro 13, 
                        piso 03, oficina 03. <br></br> Guatire, Edo. Miranda, Municipio Zamora.
                    </p>
                <div className= 'address-responsive'>
                    <p className='footer__text2'>Dirección: Av. Miranda, Edificio Oficentro 13, 
                        piso 03, oficina 03. <br></br> Guatire, Edo. Miranda, Municipio Zamora.
                    </p>
                </div>
        
            </footer>
            </div>
            </div>
            
        )
    }  
};



export default Services;
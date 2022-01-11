import React from 'react';
import './styles/home.css';
import './styles/typing-effect.css';
import FormInsepci from './Pages/FormInsepci';
import ImgCenter from './../images/insepci-img.jpg';


class Home extends React.Component{
    render(){
        return(
            <div>
            <div className='grettings'>
            <div className='grettings_typing-effect'>
            ¡Bienvenidos a INSEPCI 2021!
            </div>
            <h1 className='principalTitle'>INVERSIONES EN SERVICIOS Y PREVENCIÓN CONTRA INCENDIOS</h1>
            </div>
            <div className='main-about'>
            <div>
            <img className='main-image-center' src={ImgCenter} alt='Imágen Central'></img>
            </div>
            <div>
            <h2 id='1' className='main__about-title'>NOSOTROS</h2>
            <p className='main__about-subtitle'>
            Somos una empresa con gran trayectoria en el mercado dedicada a prevenir, educar, informar y asesorar
            a los patronos y trabajadores en materia de Seguridad e Higiene Ocupacional en el ámbito laboral, con 
            el objetivo de disminuir riesgos y mejorar sus condiciones de trabajo y su seguridad laboral basándonos
            en las normas estipuladas en la Ley.<br></br><br></br>
            Nuestra amplia experiencia en tan imprescindible práctica dentro de toda Institución Laboral, como lo son
            la Higiene y Seguridad Industrial; nos permite garantizar calidad y confiabilidad en nuestro trabajo.
            </p>
            </div>
            </div>
            <div>
            <FormInsepci />
            </div>
            </div>
            
        )
    }  
};



export default Home;
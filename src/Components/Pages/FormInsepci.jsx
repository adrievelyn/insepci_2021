import React from 'react';
import '../styles/formInsepci.css';


class FormInsepci extends React.Component{
    render(){
        return(
          
            <div>
            <form id='form' action="" method="" className='form'>
            <h2 id='5' className='form-title'>Formulario de Atención</h2>
            <p className='form-subtitle'>Para agendar Inspección, solicitar cotización y/ó realizar alguna consulta, puede enviarnos el formulario y le contáctaremos.</p>
                <label htmlFor="form-name"> Nombre de Empresa o Particular
                    <input required name="name" id="form-name" type="text" placeholder="" autoComplete='on'></input>
                </label>
                <label htmlFor="form-email"> Correo Electrónico
                    <input required name="email" id="form-email" type="email" placeholder="" autoComplete='on'></input>
                </label>
                <label htmlFor="form-number"> Número de Teléfono
                    <input required number="number" id="form-number" type="number" placeholder="" autoComplete='on'></input>
                </label>
                <label htmlFor="form-message"> Mensaje
                <textarea id='form-message' required name="message" placeholder="" cols="30" rows="7"></textarea>
                </label>
                <a href='mailto:inversiones.s.p.c.i.2021@gmail.com?subject=Gracias%20por%20contactarme' className="form-button" type="submit">ENVIAR MENSAJE</a>
            </form>
                        </div>
         
        
       

        )
    }

    }


export default FormInsepci;
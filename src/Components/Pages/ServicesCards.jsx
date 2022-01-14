import React from "react";


function ServicesCards(props){
    return(
        <div className='card'>
            <img src={props.img} alt="" className='card__img' />
            <div className='card__body'>
                <h2 className='card__title'>{props.title}</h2>
                <p className='card__description'>{props.description}</p>
                <h3 className='card__price'>{props.price}</h3>
                <button className='card__btn'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ServicesCards;
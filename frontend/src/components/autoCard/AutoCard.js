import React from 'react';
import styles from './AutoCard.scss'
import Image from '../../UI_Library/Atoms/Image/Image';
import Button from '../../UI_Library/Atoms/Buttons/Button';

function AutoCard({image, name, price, characteristics}){

    return(     
        <div className='card card-container'>
            <Image className='el' src={image} ></Image>
            <p className='bold'>{name}</p>
            <p className='bold'>{`${price} ₽`}</p>
            <p className='regular'>{characteristics}</p>
            <div className="btn">
                <Button  color="white" border='solid #090d82 1px' ><p className='btnText regular'>В корзину</p></Button>
            </div>
            
        </div>  
    );
}
export default AutoCard;
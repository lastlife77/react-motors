import React from 'react';
import styles from './Button.scss'

function Button(props){
    //props {color, borderRadius, border, width, height, cursor}
    return(     
        <button  className='button' style={{backgroundColor:(props.color), borderRadius:(props.borderRadius), border:(props.border), width:(props.width), height:(props.height), cursor:(props.cursor)}} >
            {props.children}
        </button>      
    );
}
Button.defaultProps = {color:'black', width:'auto', height:'auto', borderRadius: '0', border: '0', cursor:'pointer'};
export default Button;
import React from 'react';
import styles from './Image.scss';
import noImage from './../../img/no_image.svg';


function Image({src, width, height, cursor}){
    
    return(     
        <img src={(src!=undefined)?src:noImage} style={{width:(width), height:(height), cursor:(cursor)}}></img>
    );
}
Image.defaultProps = {width:'auto', height:'auto', cursor:'pointer'};
export default Image;
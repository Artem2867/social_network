import React from 'react';
import preloader from '../../assets/icons/preloader.gif'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt='loading'/>
        </div>
    )
}

export default Preloader;
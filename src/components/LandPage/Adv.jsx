import React from 'react';
import Advertisement from '../../assests/images/Advertisement.png';

const ImageComponent = () => {
    return (
        <div className="flex items-center justify-center bg-customBaground">
            <div className="bg-customBaground rounded-lg">
                <img src={Advertisement} alt="Example" className="rounded" style={{
                    width: '1000px',
                    height: '200px',
                    gap: '0px',
                    opacity: ' 0px',
                }} />


            </div>
        </div>
    );
};

export default ImageComponent;

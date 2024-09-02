import { useState } from 'react';
import { ImageContext } from './ImageContext';


export const ImageProvider = ({children}) => {
    const [ images, setImages ] = useState();

    return (
        <ImageContext.Provider value={{images, setImages}}>
            { children }
        </ImageContext.Provider>
    )
}
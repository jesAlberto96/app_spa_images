import { useContext } from 'react';
import { ShopCard } from '.';
import { useImages } from '../../hooks/index';
import { ImageContext } from '../../context/ImageContext';
import '../../styles/ShopList.css'

export const ShopList = ({ publisher }) => {
    const { error } = useImages('/api/images');
    const { images } =  useContext(ImageContext);

    return (
        <div className="content-products">
            {error && <p>Errores: {error}</p>}
            {
                images?.map( item => (
                    <ShopCard
                        key={ item.id }
                        { ...item }
                    />
                ))
            }
        </div>
    )
}

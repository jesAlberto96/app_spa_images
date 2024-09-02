import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { ShopPage } from '../pages';
import '../../styles/ShopRoutes.css'
import { ImageProvider } from '../../context/ImageProvider';

export const ShopRoutes = () => {

  return (
    <ImageProvider>
        <Navbar />

        <div className="container-shop">
            <Routes>
                <Route path="shop" element={<ShopPage />} />

                <Route path="/" element={<Navigate to="/shop" />} />

            </Routes>
        </div>


    </ImageProvider>
  )
}

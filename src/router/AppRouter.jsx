import { Route, Routes } from 'react-router-dom';
import { ShopRoutes } from '../shop';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={ <ShopRoutes />} />
        </Routes>
    </>
  )
}

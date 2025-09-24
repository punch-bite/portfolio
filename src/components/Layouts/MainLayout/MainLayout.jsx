// 1. Créer votre template (Layout)
import { Outlet } from 'react-router-dom';
import { Header } from '../../Header';

export const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                {/* Outlet est l'emplacement où les pages enfants s'affichent */}
                <Outlet />
            </main>
        </div>
    );
};

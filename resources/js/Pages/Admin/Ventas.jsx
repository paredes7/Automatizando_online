import ProductsAdmin from './ProductsAdmin';
import Layoutadmin from './Layouts/MainLayoutadmin';

export default function Ventas({ auth, categories, search, page, hasMore }) {

 

    return (
        <Layoutadmin title="Automatizando | Ventas" auth={auth}>
            <ProductsAdmin 
                categories={categories} 
                search={search} 
                page={page} 
                hasMore={hasMore}  
            />
        </Layoutadmin>
    );
} 

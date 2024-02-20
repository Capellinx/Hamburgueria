import { ProductCard } from './ProductCard';
import styles from './styles.module.scss'

export const ProductList = ({ productList, addProduct, toast }) => {

   return (
      <ul className={styles.container}>
         {productList.map((product) => (
            <ProductCard
               key={product.id}
               product={product}
               addProduct={addProduct}
               productList={productList}
               toast={toast}
            />
         ))}
      </ul>
   );
};

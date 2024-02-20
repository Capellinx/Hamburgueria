import { MdDelete } from 'react-icons/md';
import styles from './styles.module.scss';

export const CartItemCard = ({ product, removeProduct, cartList, toast }) => {
   const handleRemove = (idRemove) => {
      const newProductList = cartList.filter((item) => item.id !== idRemove);
      removeProduct(newProductList);
      toast.info('Item removido');
   }

   return (
      <li className={styles.container}>
         <div className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div>
               <h3 className='title3'>{product.name}</h3>
               <span className='body'>R$ {product.price}</span>
            </div>
         </div>
         <button
            aria-label='delete'
            title='Remover item'
            onClick={() => handleRemove(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};

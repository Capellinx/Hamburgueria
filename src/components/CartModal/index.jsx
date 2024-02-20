import { MdClose } from 'react-icons/md';
import { CartItemCard } from './CartItemCard';
import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';

export const CartModal = ({
   cartList,
   removeProduct,
   removeAllProducts,
   handleClose,
   toast
}) => {
   const modalRef = useRef(null);

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const handleRemoveAll = () => {
      removeAllProducts([]);
      toast.info('Todos foram removidos');
   };
   
   const closeModal = () => handleClose();

   useEffect(() => {
      const handleOutClick = (event) => {
         if (!modalRef.current?.contains(event.target)) {
            handleClose();
         }
      };
      const handleEscapeClick = (event) => {
         if (!modalRef.current?.contains(event.target)) {
            handleClose();
         }
      };

      window.addEventListener('mousedown', handleOutClick);
      window.addEventListener('keydown', handleEscapeClick);

      return () => {
         window.removeEventListener('mousedown', handleOutClick);
      };
   }, []);

   return (
      <div role='dialog' className={styles.container}>
         <div ref={modalRef} className={styles.modalBox}>
            <div className={styles.header}>
               <h2 className='title3'>Carrinho de compras</h2>
               <button aria-label='close' title='Fechar'>
                  <MdClose size={21} onClick={() => closeModal(false)} />
               </button>
            </div>
            <div className={styles.product}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}
                        cartList={cartList}
                        toast={toast}
                     />
                  ))}
               </ul>
            </div>
            <div className={styles.totalPrice}>
               <div className={styles.controlPrice}>
                  <span className='title3'>Total</span>
                  <span>
                     {total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                     })}
                  </span>
               </div>
               <button className='btn__default' onClick={() => handleRemoveAll()}>
                  Remover todos
               </button>
            </div>
         </div>
      </div>
   );
};

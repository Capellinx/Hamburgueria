import { ProductList } from '../../components/ProductList';
import { CartModal } from '../../components/CartModal';
import { Header } from '../../components/Header';

import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export const HomePage = ({ toast }) => {
   const cartListStorage = JSON.parse(localStorage.getItem('@CARTLIST')) || [];

   const [cartList, setCartList] = useState(cartListStorage);
   const [productList, setProductList] = useState([]);
   const [searchItem, setSearchItem] = useState('');
   const [isOpen, setIsOpen] = useState(false);

   const addProduct = (item) => {
      const findSameItem = cartList.findIndex(cartItem => cartItem.id === item.id);

      if (findSameItem !== -1) {
         toast.warning('Este item ja foi adicionado');
         return;
      }

      toast.success('Adicionado ao carrinho');
      setCartList([...cartList, item]);
   }

   const removeProduct = (item) => setCartList(item);

   const removeAllProducts = (item) => setCartList(item);

   const getProducts = (item) => setSearchItem(item);

   const handleOpen = () => setIsOpen(true);

   const handleClose = () => setIsOpen(false);

   const productsResult = productList.filter(product => {
      const searchFilter =
         product.name.toLowerCase().includes(searchItem.toLowerCase()) ||
         product.category.toLowerCase().includes(searchItem.toLowerCase());

      return searchFilter;
   });

   try {
      useEffect(() => {
         const getProducts = async () => {
            const { data } = await api.get('/products');
            setProductList(data);
         };
         getProducts();
      }, []);
   } catch (error) {
      toast.error(error);
   };

   useEffect(() => {
      localStorage.setItem('@CARTLIST', JSON.stringify(cartList));
   }, [cartList]);

   return (
      <>
         <Header
            productList={productList}
            getProducts={getProducts}
            cartList={cartList}
            handleOpen={handleOpen} />
         <main>
            <ProductList
               productList={productsResult}
               addProduct={addProduct}
               toast={toast} />
            {isOpen
               ?
               <CartModal
                  cartList={cartList}
                  removeProduct={removeProduct}
                  removeAllProducts={removeAllProducts}
                  handleClose={handleClose}
                  toast={toast} />
               : null}
         </main>
      </>
   );
};

import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

import styles from './styles.module.scss'

export const Header = ({ cartList, getProducts, handleOpen }) => {
   const [value, setValue] = useState('');

   const handleSearch = (e) => {
      setValue(e.target.value);
      getProducts(e.target.value);
   }

   const submit = (e) => {
      e.preventDefault();
      setValue('');
   }

   const openModal = () => handleOpen()

   return (
      <header className={styles.container}>
         <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <form onSubmit={submit}>
               <input
                  type="text"
                  value={value}
                  onChange={handleSearch}
               />
               <button type="submit" >
                  <MdSearch size={21} />
               </button>
            </form>
            <button>
               <MdShoppingCart size={21} onClick={() => openModal()} />
               <span className="body">{cartList.length}</span>
            </button>
         </div>
      </header>
   );
};

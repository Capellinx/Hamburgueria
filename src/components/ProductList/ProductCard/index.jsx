import styles from './styles.module.scss'

export const ProductCard = ({ product, addProduct, toast }) => {

    const handleClick = (product) => {
        const dataProduct = { ...product, id: crypto.randomUUID() }
        addProduct(dataProduct)
        toast.success('Adicionado ao carrinho');
    }

    return (
        <li className="card">
            <img
                src={product.img}
                alt={product.name} />
            <div>
                <h3 className="title3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button
                    className="btn__midium"
                    onClick={() => handleClick(product)}>Adicionar</button>
            </div>
        </li>
    )
}
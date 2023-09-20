import { createContext, useState } from "react";

const ProductoContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductoProvider = ({children}) => {
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)

    const handleModalProducto = () => {
        setModal(!modal)
      }

    return(
        <ProductoContext.Provider
            value={{
                producto,
                setProducto,
                modal,
                setModal,
                handleModalProducto
            }}
        >
            {children}
        </ProductoContext.Provider>
    )
}

export {
    ProductoProvider
}

export default ProductoContext
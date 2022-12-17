import React from 'react'
import Product from "./Product"
import styles from "../styles/Productsection.module.css"

const ProductSection = () => {
    return (
        <>
            <div className={styles.product_section}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <button className={styles.btn}>View More</button>
        </>
    )
}

export default ProductSection
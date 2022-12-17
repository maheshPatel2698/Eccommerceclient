import React from 'react'
import styles from "../styles/Navbar.module.css"
import { AiOutlineShoppingCart, AiOutlineUser, } from "react-icons/ai"
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo_section}>
                Logo
            </div>
            <div className={styles.menu_section}>
                <span>search bar</span>

            </div>
            <div className={styles.right_section}>
                <Link href='/cart'>
                    <span><AiOutlineShoppingCart size={25} /> Cart</span>
                </Link>
                <Link href='/profile'>
                    <span> <AiOutlineUser size={25} /> Profile </span>
                </Link>
                <Link href='/products'>
                    <span>Products</span>
                </Link>
                <Link href='/signup'>
                    <span>Signup</span>
                </Link>
                <Link href='/login'>
                    <span>Login</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
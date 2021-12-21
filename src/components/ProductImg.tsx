import React,{ useContext } from "react";
import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'

export interface Props{
    img?:string;
    className?:string;
    style?:React.CSSProperties;
}
export const ProductImg =({img='',className,style}:Props)=>{
    const {product} = useContext(productContext)
    let imgToShow:string;
    if(img){
        imgToShow = img
    }else if(product.img){
        imgToShow = product.img
    }else{
        imgToShow = noImg
    }
    return(
        <img 
            className={`${styles.productImg} ${className} `} 
            src={imgToShow} alt='Producto Img'
            style={style} 
        />
    )
}
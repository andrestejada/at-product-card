import React ,{ useCallback, useContext } from "react";
import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css'

export interface Props {
    className?:string;
    style?:React.CSSProperties;
}
export const ProductButtons=({className,style}:Props)=>{
    const {count,increaseBy,maxCount} = useContext(productContext);

    const isMaxReached = useCallback(
        () => !!maxCount && count === maxCount  ,
        [count,maxCount],
    )
    return(
        <div 
            className={`${styles.buttonsContainer} ${className} `}
            style={style}
        >
                <button 
                    className={styles.buttonMinus} 
                    onClick={ ()=>increaseBy(-1)}
                > - </button>
                <div className={styles.countLabel} >{count}</div>
                <button 
                    onClick={ ()=>increaseBy(1)}
                    className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled} `} 
                > + </button>
        </div>
    )
}
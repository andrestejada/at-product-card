import React,{ createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
  InitialValues,
  ProductCardHandler
} from '../interfaces/index'
import styles from '../styles/styles.module.css'

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

export interface Props {
  product: Product
  //children?: ReactElement | ReactElement[]
  children: (args: ProductCardHandler) => JSX.Element
  className?: string
  style?: React.CSSProperties
  onChange?: (args: OnChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { count, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues
  })

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count,
          product,
          isMaxCountReached,
          increaseBy,
          maxCount,
          reset
        })}
      </div>
    </Provider>
  )
}

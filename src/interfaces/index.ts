import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImg';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product{
    id:string;
    title:string;
    img?:string;
    style?:React.CSSProperties;
}

export interface ProductContextProps{
    count:number;
    increaseBy:(value: number) => void;
    product:Product;
    maxCount?:number
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
}

export interface OnChangeArgs{
    product:Product;
    count:number;
}


export interface ProductInCard extends Product{
    count:number;
}

export interface InitialValues{
    count?:number;
    maxCount?:number
}


export interface ProductCardHandler{
    product:Product,
    count:number,
    isMaxCountReached:boolean;
    maxCount?:number;
    increaseBy:(value:number)=>void;
    reset:()=>void;
}
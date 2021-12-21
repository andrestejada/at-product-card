import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImg } from './ProductImg';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces';
export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImg } from './ProductImg';



export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImg,
    Buttons: ProductButtons
})

export default ProductCard;
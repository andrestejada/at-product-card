import { useEffect,  useRef,  useState } from "react"
import { InitialValues, OnChangeArgs, Product } from '../interfaces/index';

interface useProductArg {
    onChange?:(arg:OnChangeArgs)=>void;
    product:Product;
    value?:number;
    initialValues?:InitialValues;
}
export const useProduct =({onChange,product,value=0,initialValues}:useProductArg)=>{

    const [count, setCount] = useState<number>( initialValues?.count || value);

    const isMount = useRef(false)
    const increaseBy =(value:number)=>{

        let newValue = Math.max( count + value,0);
        if(initialValues?.maxCount){
            newValue = Math.min(initialValues.maxCount,newValue)
        }
        setCount(newValue);

        onChange && onChange({ count:newValue,product});
    }

    const reset =()=>{
        setCount( initialValues?.count || value)
    }
    useEffect(() => {
        if(!isMount.current) return;
        setCount(value);
    }, [value]);

    useEffect(() => {        
        isMount.current = true;
    }, []);
    return{
        count,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count ,
        maxCount:initialValues?.maxCount,
        reset,
        increaseBy,
    }

}


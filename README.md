# AT-Product-Card

Paquete de pruebas que sera subido a NPM

### Andres Tejada

## Ejemplo 

´´´
import {} from 'at-product-card'
´´´

```
<div>
<h1>Shopping Page</h1>
<hr/>
    <ProductCard
        product={product}
        initialValues={{
            count:4,
            maxCount:10
        }} 
    >
        {
            ({reset,increaseBy,count,isMaxCountReached})=>(
                <>
                    <ProductImg />
                    <ProductTitle />
                    <ProductButtons  />
                </>
            )
        }
    </ProductCard>
</div>
```
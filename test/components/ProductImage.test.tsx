import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImg, ProductCard } from '../../src/components';
import { product2 } from '../data/products';



describe('ProductImage', () => {
    
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {

        const wrapper = renderer.create(
            <ProductImg img="https://hola.jpg" />
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });


    test('debe de mostrar el componente con la imagen del producto', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImg />
                    )
                }
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
        

    })
    
    

})
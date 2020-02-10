import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import Product from '../components/Product'

const ProductContainer = props => {

    const renderProducts=()=>{
        return props.products.map(product => {
            console.log(product)
            return <Product product={product}/>
        })
    }

    return(
       <Card.Group itemsPerRow={4}>
           {renderProducts()}
       </Card.Group>
    )
}
export default ProductContainer;
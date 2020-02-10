import React from 'react'
import { Card } from 'semantic-ui-react'
import Product from '../components/Product'
import { Animated } from 'react-animated-css'

const ProductContainer = props => {

    const renderProducts=()=>{
        return props.products.map(product => {
            console.log(product)
            return <Product addToCart={props.addToCart} product={product}/>
        })
    }

    return(
        <Animated animationIn='fadeInUp' animationInDuration={1000} isVisible={true} animateOnMount={true}><Card.Group itemsPerRow={4}>
        {renderProducts()}
    </Card.Group></Animated>
    )
}
export default ProductContainer;
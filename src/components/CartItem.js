import React from 'react'
import { Grid, Segment, Header, Button, Image } from 'semantic-ui-react'

const CartItem =(props)=>{

    return(
        <Segment>
            <Header>{props.product.name}</Header>
            <Image src='https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=2048x2048' size='small'/>
            <div>Price: ${props.product.price}</div>
            <Button onClick={()=>props.removeFromCart(props.product)}>Remove From Cart</Button>
        </Segment>
    )
}
export default CartItem
import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Product = props =>{
    return(
            <Card color='blue'>
                <Link key={props.product.id} to={`/products/${props.product.id}`}>
                <Image size='medium' src={props.product.img}/>
                </Link>
                <Card.Content>
                    <Card.Header>{props.product.name.substring(0, 30)}</Card.Header>
                    <Card.Description>Price: ${props.product.price}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button onClick={()=>props.addToCart(props.product)}>Add To Cart</Button>
                </Card.Content>
            </Card>
    )
}
export default Product
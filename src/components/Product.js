import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Product = props =>{
    return(
            <Card color='blue'>
                <Link key={props.product.id} to={`/products/${props.product.id}`}>
                <Image src='https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=2048x2048'/>
                </Link>
                <Card.Content>
                    <Card.Header>{props.product.name}</Card.Header>
                    <Card.Description>Price: ${props.product.price}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button>Add To Cart</Button>
                </Card.Content>
            </Card>
    )
}
export default Product
import React from 'react'
import { Card } from 'semantic-ui-react'

const Product = props =>{
    return(
        <Card>
            <Card.Content>
                <Card.Header>{props.product.name}</Card.Header>
            </Card.Content>
        </Card>
    )
}
export default Product
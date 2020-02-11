import React from 'react'
import { Grid, Segment, Header, Button, Image, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'


const Cart = (props)=>{

    let total = 0

    const renderTotal=()=>{

        props.cart.forEach(product=>{
            total = total + product.price
        })

        return(
            <Header>Total: ${total}</Header>
        )
    }

    const renderProducts=()=>{
        if(props.cart.length > 0){
            return props.cart.map(product=>{
                return(
                    <CartItem product={product} removeFromCart={props.removeFromCart} />
                )
            })
        }else{
            return(
                <Header>Cart is Empty</Header>
            )
        }
        
    }

    const renderPurchaseOptions=()=>{
        if(localStorage['token'] !== undefined && props.cart.length > 0){
            return(
                <div>
                    <Button color='red'>Complete Purchase</Button>
                    <Button>Empty Cart</Button>
                </div>
            )
        }else if(props.cart.length <= 0){
            return(
                <Header>Add Items to Cart to Purchase.</Header>
            )
        }else{
            return(
                <Header>Login to Make Purchase</Header>
            )
        }
    }

    return(
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Segment.Group>
                        {renderProducts()}
                    </Segment.Group>
                </Grid.Column>
                <Grid.Column width={8}>
                    {renderTotal()}
                </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
                <Grid.Column width={16}>
                    {renderPurchaseOptions()}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default Cart
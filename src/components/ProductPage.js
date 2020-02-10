import React from 'react'
import {Grid, Image, Header, GridColumn, Button, Divider, Rating} from 'semantic-ui-react'
import Reviews from './Reviews'

function ProductPage(props){

    let pId = parseInt(props.match.params.productId)
    console.log(pId)
    const product = props.products.find(product => product.id === pId)

    const productOut=()=>{
        if(product){
            return(
                <Grid padded>
                    <Grid.Row>
                        {' '}
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}><Image src='https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=2048x2048'/></Grid.Column>
                        <GridColumn width={3}></GridColumn>
                        <Grid.Column width={3} align='right'>
                            <h1>{product.name}</h1>
                            <Header>Price: ${product.price}</Header>
                            <h1>{' '}</h1>
                            <Rating icon='star' defaultRating={product.rating} maxRating={5} size='huge' disabled/>
                            <div><Button onClick={()=>props.addToCart(product)}color='google plus'>Add To Cart</Button><Button>Buy Now</Button></div>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider/>
                    <Grid.Row>
                        <Grid.Column>
                            <Header size='large'>Product Description</Header>
                            <p>{product.description}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column><Reviews productId={pId}/></Grid.Column>
                    </Grid.Row>
                </Grid>
                
            )
        }else{
            return(
            <Grid.Row>
                <Grid.Column width={8}></Grid.Column>
                <Grid.Column width={4}>
                    <h1>Product</h1>
                </Grid.Column>
            </Grid.Row>
            )
        }
    } 

    return(
        <div>
            {productOut()}
        </div>
    )

    

}
export default ProductPage;